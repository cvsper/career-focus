"use client"

import React, { useState, useRef, useEffect, useCallback, type KeyboardEvent } from "react"
import { useChat } from "@ai-sdk/react"
import type { UIMessage } from "ai"
import { useConversation } from "@elevenlabs/react"
import { AnimatePresence, motion } from "motion/react"
import { X, Send, Loader2, Mic, MicOff, MessageSquareText } from "lucide-react"
import { cn } from "@/lib/utils"
import { getSignedUrl } from "@/app/actions/get-signed-url"

function getMessageText(msg: UIMessage): string {
  return msg.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("")
}

/* ── Color Orb ── */
function ColorOrb({ dimension = "24px", className, speaking = false }: { dimension?: string; className?: string; speaking?: boolean }) {
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
        "--spin-duration": speaking ? "4s" : "20s",
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

/* ── Voice Panel (ElevenLabs Conversational AI) ── */
function VoicePanel({ onSwitchToText, onClose }: { onSwitchToText: () => void; onClose: () => void }) {
  const [voiceMessages, setVoiceMessages] = useState<{ source: string; message: string }[]>([])
  const scrollRef = useRef<HTMLDivElement>(null)

  const conversation = useConversation({
    onMessage: (msg: { source: string; message: string }) => {
      setVoiceMessages((prev) => [...prev, { source: msg.source, message: msg.message }])
    },
    onError: (error: unknown) => {
      console.error("Voice agent error:", error)
    },
  })

  const { status, isSpeaking } = conversation

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [voiceMessages])

  const toggleVoice = useCallback(async () => {
    if (status === "connected") {
      await conversation.endSession()
    } else {
      try {
        const { signedUrl } = await getSignedUrl()
        await conversation.startSession({ signedUrl })
      } catch (err) {
        console.error("Failed to start voice session:", err)
      }
    }
  }, [status, conversation])

  const isConnected = status === "connected"

  return (
    <motion.div
      key="voice"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2, delay: 0.05 }}
      className="flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-neutral-100 shrink-0">
        <div className="flex items-center gap-2.5">
          <ColorOrb dimension="24px" speaking={isSpeaking} />
          <div>
            <h2 className="font-heading text-sm font-bold text-neutral-800 leading-tight">
              Voice Assistant
            </h2>
            <p className="text-[11px] text-neutral-400 leading-tight">
              {isConnected ? (isSpeaking ? "Speaking..." : "Listening...") : "Tap mic to start"}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button
            onClick={onSwitchToText}
            aria-label="Switch to text chat"
            className="h-7 w-7 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors cursor-pointer"
          >
            <MessageSquareText className="h-3.5 w-3.5 text-neutral-400" />
          </button>
          <button
            onClick={onClose}
            aria-label="Close chat"
            className="h-7 w-7 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="h-3.5 w-3.5 text-neutral-500" />
          </button>
        </div>
      </div>

      {/* Voice visualization + transcript */}
      <div className="flex-1 flex flex-col min-h-0">
        {/* Orb area */}
        <div className="flex items-center justify-center py-6">
          <motion.div
            animate={{ scale: isSpeaking ? [1, 1.08, 1] : 1 }}
            transition={{ repeat: isSpeaking ? Infinity : 0, duration: 1.5, ease: "easeInOut" }}
          >
            <ColorOrb dimension="100px" speaking={isSpeaking} />
          </motion.div>
        </div>

        {/* Transcript */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 pb-3 space-y-2 min-h-0">
          {voiceMessages.map((msg, i) => (
            <div key={i} className={`flex ${msg.source === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-[13px] leading-relaxed ${
                  msg.source === "user"
                    ? "bg-brand-blue-500 text-white rounded-br-md"
                    : "bg-neutral-100 text-neutral-800 rounded-bl-md"
                }`}
              >
                {msg.message}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mic button */}
      <div className="shrink-0 border-t border-neutral-100 px-3 py-3 flex justify-center">
        <button
          onClick={toggleVoice}
          aria-label={isConnected ? "End voice conversation" : "Start voice conversation"}
          className={cn(
            "h-14 w-14 rounded-full flex items-center justify-center transition-all cursor-pointer",
            isConnected
              ? "bg-red-500 hover:bg-red-600 shadow-lg shadow-red-500/25"
              : "bg-brand-blue-500 hover:bg-brand-blue-600 shadow-lg shadow-brand-blue-500/25"
          )}
        >
          {isConnected ? (
            <MicOff className="h-6 w-6 text-white" />
          ) : (
            <Mic className="h-6 w-6 text-white" />
          )}
        </button>
      </div>
    </motion.div>
  )
}

/* ── Chat Widget ── */
const PANEL_W = 400
const PANEL_H = 500

type Mode = "text" | "voice"

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [mode, setMode] = useState<Mode>("text")
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status } = useChat()
  const isLoading = status === "submitted" || status === "streaming"

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (isOpen && mode === "text") setTimeout(() => inputRef.current?.focus(), 200)
  }, [isOpen, mode])

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
        aria-label={isOpen ? "Career Focus Assistant" : undefined}
      >
        <AnimatePresence mode="wait">
          {!isOpen ? (
            /* ── Collapsed pill ── */
            <motion.button
              key="pill"
              onClick={() => setIsOpen(true)}
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
          ) : mode === "voice" ? (
            /* ── Voice mode ── */
            <VoicePanel
              onSwitchToText={() => setMode("text")}
              onClose={() => setIsOpen(false)}
            />
          ) : (
            /* ── Text chat mode ── */
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
                    onClick={() => setMode("voice")}
                    aria-label="Switch to voice mode"
                    className="h-7 w-7 rounded-full hover:bg-neutral-100 flex items-center justify-center transition-colors cursor-pointer"
                  >
                    <Mic className="h-3.5 w-3.5 text-neutral-400" />
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
