import { Navigate } from "react-router-dom"
import type { RequireAuthProps } from "../types/RequireAuthProps"

export const RequireAuth = ({ children }: RequireAuthProps) => {
  const isLoggedIn = false
  if (isLoggedIn) return children
  return <Navigate to={"/login"} replace />
}
