import { useState, type FormEvent } from "react"
import api from "../lib/api"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Loading } from "../components/Loading"
import type { ChatResponse } from "../types"

export function ChatPage() {
  const [message, setMessage] = useState("")
  const [reply, setReply] = useState<string | null>(null)
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()
    setError("")
    setReply(null)
    setLoading(true)
    try {
      const { data } = await api.post<ChatResponse>("/chat", { message })
      setReply(data.reply)
      setMessage("")
    } catch {
      setError("Error al enviar mensaje")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Chat</h1>

      <form onSubmit={handleSubmit} className="flex gap-3 items-end">
        <div className="flex-1">
          <Input
            label="Mensaje"
            id="message"
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Escribe tu mensaje..."
            required
          />
        </div>
        <Button type="submit" loading={loading}>
          Enviar
        </Button>
      </form>

      {loading && <Loading text="Pensando..." />}

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {error}
        </p>
      )}

      {reply && (
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-5">
          <p className="font-medium text-blue-800">Respuesta:</p>
          <p className="text-gray-700 mt-1">{reply}</p>
        </div>
      )}
    </div>
  )
}
