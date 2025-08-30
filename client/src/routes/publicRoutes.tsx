import LoginPage from "../features/auth/pages/LoginPage"
import RegisterPage from "../features/auth/pages/RegisterPage"
import { ROUTES_PATHS } from "./routePaths"

export const publicRoutes = [
  { path: ROUTES_PATHS.login, element: <LoginPage /> },
  { path: ROUTES_PATHS.register, element: <RegisterPage /> },
]
