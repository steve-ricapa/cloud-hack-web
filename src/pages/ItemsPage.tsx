import { useState, useEffect, type FormEvent } from "react"
import api from "../lib/api"
import { Button } from "../components/Button"
import { Input } from "../components/Input"
import { Loading } from "../components/Loading"
import type { Item } from "../types"

export function ItemsPage() {
  const [items, setItems] = useState<Item[]>([])
  const [name, setName] = useState("")
  const [description, setDescription] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(true)
  const [creating, setCreating] = useState(false)

  async function fetchItems() {
    setLoading(true)
    try {
      const { data } = await api.get<{ items: Item[] }>("/items")
      setItems(data.items)
    } catch {
      setError("Error al cargar items")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchItems()
  }, [])

  async function handleCreate(e: FormEvent) {
    e.preventDefault()
    setError("")
    setCreating(true)
    try {
      await api.post("/items", { name, description: description || undefined })
      setName("")
      setDescription("")
      await fetchItems()
    } catch {
      setError("Error al crear item")
    } finally {
      setCreating(false)
    }
  }

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Items</h1>

      <form onSubmit={handleCreate} className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 space-y-4">
        <h2 className="font-semibold text-gray-800">Nuevo Item</h2>
        <Input
          label="Nombre"
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <Input
          label="Descripción (opcional)"
          id="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button type="submit" loading={creating}>
          Crear Item
        </Button>
      </form>

      {error && (
        <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded px-3 py-2">
          {error}
        </p>
      )}

      {loading ? (
        <Loading />
      ) : items.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No hay items todavía. Crea uno arriba.
        </p>
      ) : (
        <div className="grid gap-3">
          {items.map((item) => (
            <div
              key={item.itemId}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-4"
            >
              <h3 className="font-semibold text-gray-900">{item.name}</h3>
              {item.description && (
                <p className="text-sm text-gray-600 mt-1">
                  {item.description}
                </p>
              )}
              <p className="text-xs text-gray-400 mt-2">
                {new Date(item.createdAt).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
