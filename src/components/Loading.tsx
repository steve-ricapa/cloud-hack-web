export function Loading({ text = "Cargando..." }: { text?: string }) {
  return (
    <div className="flex items-center justify-center py-12">
      <div className="animate-spin h-8 w-8 border-4 border-blue-600 border-t-transparent rounded-full" />
      <span className="ml-3 text-gray-600">{text}</span>
    </div>
  )
}
