"use client"


import { useState } from "react"
import { Button } from "./button.js"
import { Plus, ArrowUp, Settings2, Mic, X, Check } from "lucide-react"


export default function ChatInput({ onSubmit, disabled }) {
  const [input, setInput] = useState("")
  const [isRecording, setIsRecording] = useState(false)
  const handleSubmit = (e) => {
    e.preventDefault()
    if (input.trim() && !disabled) {
      if (onSubmit) {
        onSubmit(input)
      }
      setInput("")
    }
  }

  const handleMicClick = () => {
    setIsRecording(true)
    setTimeout(() => {
      setIsRecording(false)
      setInput("When speech to text feature ?")
    }, 5000)
  }

  const handleCancelRecording = () => {
    setIsRecording(false)
  }

  const handleConfirmRecording = () => {
    setIsRecording(false)
    setInput("When speech to text feature ?")
  }

  return (
    <div className="relative">
      <form onSubmit={handleSubmit} className="relative">
        <div
          className="border border-zinc-700 rounded-2xl p-4 relative transition-all duration-500 ease-in-out overflow-hidden"
          style={{ backgroundColor: "#141415" }}
        >
          <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask a follow-up..."
                disabled={disabled}
                className="w-full bg-transparent text-gray-300 placeholder-gray-500 resize-none border-none outline-none text-base leading-relaxed min-h-[24px] max-h-32 transition-all duration-200 disabled:opacity-50"
                rows={1}
                onInput={(e) => {
                  const target = e.target 
                  target.style.height = "auto"
                  target.style.height = target.scrollHeight + "px"
                }}
              />

              <div className="flex items-center justify-between mt-8">
                <div className="flex items-center gap-2">
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-white hover:text-white hover:bg-zinc-700 rounded-lg transition-all duration-200 hover:scale-110"
                  >
                    <Plus className="h-5 w-5" />
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="h-8 w-8 p-0 text-white hover:text-white hover:bg-zinc-700 rounded-lg transition-all duration-200 hover:scale-110"
                  >
                    <Settings2 className="h-5 w-5" />
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={handleMicClick}
                    className="h-8 w-8 p-0 text-white hover:text-white hover:bg-zinc-700 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 active:bg-red-600/20 active:text-red-400"
                  >
                    <Mic className="h-5 w-5 transition-transform duration-200" />
                  </Button>

                  
                </div>

                <Button
                  type="submit"
                  size="sm"
                  disabled={!input.trim() || disabled}
                  className="h-8 w-8 p-0 bg-zinc-700 hover:bg-zinc-600 disabled:bg-zinc-800 disabled:text-zinc-500 text-white rounded-lg transition-all duration-200 hover:scale-110 disabled:hover:scale-100"
                >
                  <ArrowUp className="h-5 w-5" />
                </Button>
              </div>
        </div>
      </form>
    </div>
  )
}
