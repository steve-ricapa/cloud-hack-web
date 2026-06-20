import { type JSX } from "react"
import { Navigate } from "react-router-dom"
import { tokenStorage } from "./tokenStorage"

export function ProtectedRoute({ children }: { children: JSX.Element }) {
  if (!tokenStorage.hasTokens()) {
    return <Navigate to="/login" replace />
  }
  return children
}
