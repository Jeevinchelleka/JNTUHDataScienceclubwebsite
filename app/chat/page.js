"use client"

import { useState, useRef, useEffect } from "react"
import ChatInput from "../_components/chat-input.js"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"

export default function Home() {
  const [hasMessages, setHasMessages] = useState(false)
  const [messages, setMessages] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const chatContainerRef = useRef(null)

  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
    }
  }, [messages])

  const handleSubmit = async (input, agent) => {
    if (!input.trim() || isLoading) return

    console.log("[v0] Chat submission:", { input, agent })

    setHasMessages(true)

    const userMessage = {
      id: Date.now().toString(),
      role: "user",
      content: input,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setIsLoading(true)

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [...messages, userMessage].map((m) => ({
            role: m.role,
            content: m.content,
          })),
          agent,
        }),
      })

      if (!response.ok) throw new Error("Failed to get response")

      const contentType = response.headers.get("content-type")

      if (contentType?.includes("text/plain")) {
        const text = await response.text()
        const assistantMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: text,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, assistantMessage])
      } else {
        const reader = response.body?.getReader()
        if (!reader) throw new Error("No reader available")

        let assistantContent = ""
        const assistantMessage = {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "",
          timestamp: new Date(),
        }

        setMessages((prev) => [...prev, assistantMessage])

        while (true) {
          const { done, value } = await reader.read()
          if (done) break

          const chunk = new TextDecoder().decode(value)
          assistantContent += chunk

          setMessages((prev) =>
            prev.map((m) => (m.id === assistantMessage.id ? { ...m, content: assistantContent } : m)),
          )
        }
      }
    } catch (error) {
      console.error("[v0] Chat error:", error)
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 1).toString(),
          role: "assistant",
          content: "Sorry, I encountered an error. Please try again.",
          timestamp: new Date(),
        },
      ])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="h-screen bg-zinc-950 flex flex-col">
      {!hasMessages ? (
        // Initial centered layout
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-2xl">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-white mb-2">Ask anything about our University...</h1>
            </div>
            <ChatInput onSubmit={handleSubmit} disabled={isLoading} />
          </div>
        </div>
      ) : (
        // Chat interface with messages
        <div className="flex-1 flex flex-col h-full">
          <div ref={chatContainerRef} className="flex-1 overflow-y-auto px-4 pt-32 pb-4">
            <div className="max-w-4xl mx-auto space-y-4">
              {messages.map((message) => (
                <div key={message.id} className="flex gap-3">
                  <div className="flex-shrink-0">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        message.role === "user" ? "bg-blue-600" : "bg-green-600"
                      }`}
                    >
                      <span className="text-white text-sm font-medium">{message.role === "user" ? "U" : "A"}</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    {message.role === "assistant" ? (
                    <div className="prose prose-invert text-white text-sm leading-relaxed">
                      <ReactMarkdown >
                      {message.content}
                      </ReactMarkdown>
                    </div>
                    ) : (
                      <div className="text-white text-sm leading-relaxed whitespace-pre-wrap">{message.content}</div>
                    )}
                    <div className="text-xs text-zinc-500 mt-2">{message.timestamp.toLocaleTimeString()}</div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 bg-green-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-medium">A</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <div className="text-sm text-zinc-400">Thinking...</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chat input at bottom */}
          <div className="fixed bottom-0 left-0 right-0 border-t border-zinc-800 p-4 bg-zinc-950">
            <div className="max-w-4xl mx-auto">
              <ChatInput onSubmit={handleSubmit} disabled={isLoading} />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
