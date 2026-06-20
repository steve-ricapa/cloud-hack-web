import { Link, useLocation, useNavigate } from "react-router-dom"
import { tokenStorage } from "../auth/tokenStorage"

const links = [
  { to: "/dashboard", label: "Dashboard" },
  { to: "/chat", label: "Chat" },
  { to: "/items", label: "Items" },
]

export function Navbar() {
  const location = useLocation()
  const navigate = useNavigate()

  function handleLogout() {
    tokenStorage.clear()
    navigate("/login")
  }

  return (
    <nav className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/dashboard" className="font-bold text-lg text-blue-600">
            Cloud Hack
          </Link>
          <div className="flex gap-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium transition ${
                  location.pathname === link.to
                    ? "text-blue-600"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <button
          onClick={handleLogout}
          className="text-sm text-red-600 hover:text-red-800 font-medium cursor-pointer"
        >
          Logout
        </button>
      </div>
    </nav>
  )
}
