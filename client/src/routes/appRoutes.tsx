import { createBrowserRouter } from "react-router-dom"
import { publicRoutes } from "./publicRoutes"
import { protectedRoutes } from "./protectedRoutes"
import NotFoundPage from "../shared/pages/NotFoundPage"

export const router = createBrowserRouter([
  ...publicRoutes,
  ...protectedRoutes,
  { path: "*", element: <NotFoundPage /> },
])
