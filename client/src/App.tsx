import { RouterProvider } from "react-router-dom"
import { router } from "./routes/appRoutes"

export default function App() {
  return <RouterProvider router={router} />
}
