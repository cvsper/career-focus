"use client"

import React, { useState, useRef, useEffect, type KeyboardEvent } from "react"
import { useChat } from "@ai-sdk/react"
import type { UIMessage } from "ai"
import { AnimatePresence, motion } from "motion/react"
import { X, Send, Loader2, Volume2, VolumeOff } from "lucide-react"
import { cn } from "@/lib/utils"

function getMessageText(msg: UIMessage): string {
  return msg.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("")
}

/* ── Color Orb ── */
function ColorOrb({ dimension = "24px", className }: { dimension?: string; className?: string }) {
  const dimValue = parseInt(dimension.replace("px", ""), 10)
  const blur = dimValue < 50 ? Math.max(dimValue * 0.008, 1) : Math.max(dimValue * 0.015, 4)
  const contrast = dimValue < 50 ? Math.max(dimValue * 0.004, 1.2) : Math.max(dimValue * 0.008, 1.5)
  const dot = dimValue < 50 ? Math.max(dimValue * 0.004, 0.05) : Math.max(dimValue * 0.008, 0.1)
  const shadow = dimValue < 50 ? Math.max(dimValue * 0.004, 0.5) : Math.max(dimValue * 0.008, 2)
  const mask = dimValue < 30 ? "0%" : dimValue < 50 ? "5%" : dimValue < 100 ? "15%" : "25%"
  const adj = dimValue < 30 ? 1.1 : dimValue < 50 ? Math.max(contrast * 1.2, 1.3) : contrast

  return (
    <div
      className={cn("color-orb", className)}
      style={{
        width: dimension,
        height: dimension,
        "--base": "oklch(45% 0.15 250)",
        "--accent1": "oklch(55% 0.20 250)",
        "--accent2": "oklch(60% 0.18 200)",
        "--accent3": "oklch(50% 0.16 280)",
        "--spin-duration": "20s",
        "--blur": `${blur}px`,
        "--contrast": adj,
        "--dot": `${dot}px`,
        "--shadow": `${shadow}px`,
        "--mask": mask,
      } as React.CSSProperties}
    >
      <style jsx>{`
        @property --angle {
          syntax: "<angle>";
          inherits: false;
          initial-value: 0deg;
        }
        .color-orb {
          display: grid;
          grid-template-areas: "stack";
          overflow: hidden;
          border-radius: 50%;
          position: relative;
          transform: scale(1.1);
        }
        .color-orb::before,
        .color-orb::after {
          content: "";
          display: block;
          grid-area: stack;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          transform: translateZ(0);
        }
        .color-orb::before {
          background:
            conic-gradient(from calc(var(--angle) * 2) at 25% 70%, var(--accent3), transparent 20% 80%, var(--accent3)),
            conic-gradient(from calc(var(--angle) * 2) at 45% 75%, var(--accent2), transparent 30% 60%, var(--accent2)),
            conic-gradient(from calc(var(--angle) * -3) at 80% 20%, var(--accent1), transparent 40% 60%, var(--accent1)),
            conic-gradient(from calc(var(--angle) * 2) at 15% 5%, var(--accent2), transparent 10% 90%, var(--accent2)),
            conic-gradient(from calc(var(--angle) * 1) at 20% 80%, var(--accent1), transparent 10% 90%, var(--accent1)),
            conic-gradient(from calc(var(--angle) * -2) at 85% 10%, var(--accent3), transparent 20% 80%, var(--accent3));
          box-shadow: inset var(--base) 0 0 var(--shadow) calc(var(--shadow) * 0.2);
          filter: blur(var(--blur)) contrast(var(--contrast));
          animation: orb-spin var(--spin-duration) linear infinite;
        }
        .color-orb::after {
          background-image: radial-gradient(circle at center, var(--base) var(--dot), transparent var(--dot));
          background-size: calc(var(--dot) * 2) calc(var(--dot) * 2);
          backdrop-filter: blur(calc(var(--blur) * 2)) contrast(calc(var(--contrast) * 2));
          mix-blend-mode: overlay;
        }
        .color-orb[style*="--mask: 0%"]::after { mask-image: none; }
        .color-orb:not([style*="--mask: 0%"])::after { mask-image: radial-gradient(black var(--mask), transparent 75%); }
        @keyframes orb-spin { to { --angle: 360deg; } }
        @media (prefers-reduced-motion: reduce) { .color-orb::before { animation: none; } }
      `}</style>
    </div>
  )
}

/* ── Chat Widget ── */
const PANEL_W = 400
const PANEL_H = 500

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [voiceOn, setVoiceOn] = useState(false)
  const spokenRef = useRef<Set<string>>(new Set())

  const { messages, sendMessage, status } = useChat()
  const isLoading = status === "submitted" || status === "streaming"

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Auto-speak new assistant messages with ElevenLabs
  useEffect(() => {
    if (!voiceOn || typeof window === "undefined") return
    const last = messages[messages.length - 1]
    if (!last || last.role !== "assistant" || spokenRef.current.has(last.id)) return
    if (status === "streaming") return // wait until done
    const text = getMessageText(last)
    if (!text) return
    spokenRef.current.add(last.id)

    // Call ElevenLabs TTS API
    fetch("/api/tts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text }),
    })
      .then((res) => {
        if (!res.ok) throw new Error("TTS failed")
        return res.blob()
      })
      .then((blob) => {
        const audio = new Audio(URL.createObjectURL(blob))
        audio.play()
      })
      .catch((err) => {
        console.error("TTS error:", err)
      })
  }, [messages, status, voiceOn])

  useEffect(() => {
    if (isOpen) setTimeout(() => inputRef.current?.focus(), 200)
  }, [isOpen])

  useEffect(() => {
    function onKey(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape" && isOpen) setIsOpen(false)
    }
    function onClick(e: MouseEvent) {
      if (isOpen && wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", onKey)
    document.addEventListener("mousedown", onClick)
    return () => {
      document.removeEventListener("keydown", onKey)
      document.removeEventListener("mousedown", onClick)
    }
  }, [isOpen])

  function open() {
    setIsOpen(true)
  }

  const WELCOME_TEXT =
    "Hi! I'm the Career Focus assistant. I can help you learn about our programs, services, and how to get started. What would you like to know?"

  function send() {
    const text = input.trim()
    if (!text || isLoading) return
    setInput("")
    sendMessage({ text })
  }

  function handleKeyPress(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      send()
    }
  }

  return (
    <div ref={wrapperRef} className="fixed bottom-6 right-4 sm:right-6 z-50">
      <motion.div
        layout
        className="bg-white border border-neutral-200/60 shadow-[0_8px_30px_rgba(0,0,0,0.12),0_24px_60px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col"
        initial={false}
        animate={{
          width: isOpen ? Math.min(PANEL_W, typeof window !== "undefined" ? window.innerWidth - 32 : PANEL_W) : "auto",
          height: isOpen ? PANEL_H : 48,
          borderRadius: isOpen ? 16 : 24,
        }}
        transition={{ type: "spring", stiffness: 500, damping: 40, mass: 0.8 }}
        role={isOpen ? "dialog" : undefined}
        aria-label={isOpen ? "Career Focus Assistant chat" : undefined}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* ── Collapsed pill ── */
            <motion.button
              key="pill"
              onClick={open}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2.5 px-3 h-12 cursor-pointer select-none whitespace-nowrap"
              aria-label="Open chat assistant"
            >
              <ColorOrb dimension="28px" />
              <span className="font-heading text-sm font-semibold text-neutral-700 pr-1">
                Ask AI
              </span>
            </motion.button>
          ) : (
            /* ── Expanded chat ── */
            <motion.div
              key="chat"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className="flex flex-col h-full"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-4 py-2.5 border-b border-neutral-100 shrink-0">
                <div className="flex items-center gap-2.5">
                  <ColorOrb dimension="24px" />
                  <div>
                    <h2 className="font-heading text-sm font-bold text-neutral-800 leading-tight">
                      Career Focus Assistant
                    </h2>
                    <p className="text-[11px] text-neutral-400 leading-tight">
                      Ask about our programs & services
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setVoiceOn((v) => !v)}
                    aria-label={voiceOn ? "Mute voice" : "Enable voice"}
                    className="h-7 w-7 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    {voiceOn ? (
                      <Volume2 className="h-3.5 w-3.5 text-brand-blue-500" />
                    ) : (
                      <VolumeOff className="h-3.5 w-3.5 text-neutral-400" />
                    )}
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    aria-label="Close chat"
                    className="h-7 w-7 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <X className="h-3.5 w-3.5 text-neutral-500" />
                  </button>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
                {/* Static welcome message */}
                <div className="flex justify-start">
                  <div className="max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed bg-neutral-100 text-neutral-800 rounded-bl-md">
                    {WELCOME_TEXT}
                  </div>
                </div>
                {messages.map((msg) => {
                  const text = getMessageText(msg)
                  if (!text) return null
                  return (
                    <div
                      key={msg.id}
                      className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                    >
                      <div
                        className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-[14px] leading-relaxed ${
                          msg.role === "user"
                            ? "bg-brand-blue-500 text-white rounded-br-md"
                            : "bg-neutral-100 text-neutral-800 rounded-bl-md"
                        }`}
                      >
                        {text}
                      </div>
                    </div>
                  )
                })}
                {status === "submitted" && (
                  <div className="flex justify-start">
                    <div className="bg-neutral-100 rounded-2xl rounded-bl-md px-4 py-3">
                      <div className="flex gap-1.5">
                        <span className="h-2 w-2 rounded-full bg-neutral-400 animate-bounce [animation-delay:0ms]" />
                        <span className="h-2 w-2 rounded-full bg-neutral-400 animate-bounce [animation-delay:150ms]" />
                        <span className="h-2 w-2 rounded-full bg-neutral-400 animate-bounce [animation-delay:300ms]" />
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <form
                onSubmit={(e) => { e.preventDefault(); send() }}
                className="shrink-0 border-t border-neutral-100 px-3 py-2.5 flex items-end gap-2"
              >
                <textarea
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="Ask me anything..."
                  aria-label="Chat message input"
                  rows={1}
                  className="flex-1 resize-none rounded-xl border border-neutral-200 bg-neutral-50/50 px-3 py-2.5 text-[14px] placeholder:text-neutral-400 focus:outline-none focus:border-brand-blue-300 focus:bg-white transition-colors max-h-20 leading-snug"
                  disabled={isLoading}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isLoading}
                  aria-label="Send message"
                  className="shrink-0 h-10 w-10 rounded-xl bg-brand-blue-500 hover:bg-brand-blue-600 disabled:bg-neutral-200 disabled:cursor-not-allowed flex items-center justify-center transition-colors cursor-pointer"
                >
                  {isLoading ? (
                    <Loader2 className="h-4 w-4 text-white animate-spin" />
                  ) : (
                    <Send className="h-4 w-4 text-white" />
                  )}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
