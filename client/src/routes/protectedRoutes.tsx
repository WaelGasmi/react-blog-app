import { RequireAuth } from "../features/auth/components/RequireAuth"
import HomePage from "../features/post/pages/HomePage"
import ProfilePage from "../features/profile/pages/ProfilePage"
import { ROUTES_PATHS } from "./routePaths"

export const protectedRoutes = [
  {
    path: ROUTES_PATHS.profile,
    element: (
      <RequireAuth>
        <ProfilePage />
      </RequireAuth>
    ),
  },
  {
    path: ROUTES_PATHS.home,
    element: (
      <RequireAuth>
        <HomePage />
      </RequireAuth>
    ),
  },
]
