export function DashboardPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <p className="text-gray-700 text-lg">¡Bienvenido a Cloud Hack API!</p>
        <p className="text-gray-500 mt-2">
          Usa el menú superior para navegar entre Chat e Items.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-blue-50 rounded-xl p-5 border border-blue-200">
          <h2 className="font-semibold text-blue-800">Auth</h2>
          <p className="text-sm text-blue-600 mt-1">
            Login / Register con JWT
          </p>
        </div>
        <div className="bg-green-50 rounded-xl p-5 border border-green-200">
          <h2 className="font-semibold text-green-800">Chat</h2>
          <p className="text-sm text-green-600 mt-1">
            Endpoint de IA simulado
          </p>
        </div>
        <div className="bg-purple-50 rounded-xl p-5 border border-purple-200">
          <h2 className="font-semibold text-purple-800">Items</h2>
          <p className="text-sm text-purple-600 mt-1">
            CRUD con DynamoDB
          </p>
        </div>
      </div>
    </div>
  )
}
