"use client"

import { useState, useRef, useEffect, type KeyboardEvent } from "react"
import { useChat } from "@ai-sdk/react"
import type { UIMessage } from "ai"
import { MessageCircle, X, Send, Loader2 } from "lucide-react"

function getMessageText(msg: UIMessage): string {
  return msg.parts
    .filter((p): p is { type: "text"; text: string } => p.type === "text")
    .map((p) => p.text)
    .join("")
}

export function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false)
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)

  const { messages, sendMessage, status, setMessages } = useChat()

  const isLoading = status === "submitted" || status === "streaming"

  // Scroll to bottom on new messages
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  // Focus input when chat opens
  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  // Close on Escape
  useEffect(() => {
    function handleKeyDown(e: globalThis.KeyboardEvent) {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false)
      }
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [isOpen])

  function toggleChat() {
    setIsOpen((prev) => !prev)
    if (!isOpen && messages.length === 0) {
      setMessages([
        {
          id: "welcome",
          role: "assistant",
          parts: [
            {
              type: "text",
              text: "Hi! I'm the Career Focus assistant. I can help you learn about our programs, services, and how to get started. What would you like to know?",
            },
          ],
        },
      ])
    }
  }

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
    <>
      {/* Chat Panel */}
      {isOpen && (
        <div
          ref={panelRef}
          role="dialog"
          aria-label="Career Focus Assistant chat"
          className="fixed bottom-24 right-4 z-50 flex flex-col bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12),0_24px_60px_rgba(0,0,0,0.08)] border border-neutral-200/60 w-[calc(100vw-2rem)] max-w-[400px] h-[min(500px,calc(100vh-8rem))] sm:right-6 sm:bottom-24 animate-scale-in"
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-100 bg-brand-blue-500 rounded-t-2xl shrink-0">
            <div className="flex items-center gap-2.5">
              <div className="h-8 w-8 rounded-full bg-white/20 flex items-center justify-center">
                <MessageCircle className="h-4 w-4 text-white" />
              </div>
              <div>
                <h2 className="font-heading text-sm font-bold text-white leading-tight">
                  Career Focus Assistant
                </h2>
                <p className="text-[11px] text-blue-100 leading-tight">
                  Ask about our programs & services
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
              className="h-8 w-8 rounded-full hover:bg-white/15 flex items-center justify-center transition-colors cursor-pointer"
            >
              <X className="h-4 w-4 text-white" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 min-h-0">
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
            onSubmit={(e) => {
              e.preventDefault()
              send()
            }}
            className="shrink-0 border-t border-neutral-100 px-3 py-2.5 flex items-end gap-2"
          >
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Type a message..."
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
        </div>
      )}

      {/* Floating Toggle Button */}
      <button
        onClick={toggleChat}
        aria-label={isOpen ? "Close chat" : "Open chat assistant"}
        aria-expanded={isOpen}
        className="fixed bottom-6 right-4 sm:right-6 z-50 h-14 w-14 rounded-full bg-brand-blue-500 hover:bg-brand-blue-600 text-white shadow-[0_4px_20px_rgba(0,82,204,0.35)] hover:shadow-[0_6px_28px_rgba(0,82,204,0.45)] flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </button>
    </>
  )
}
