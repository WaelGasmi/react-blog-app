import { Router } from "express"
import asyncHandler from "express-async-handler"
import { authGuard } from "../../middlewares/authGuard.js"
import {
  loginController,
  logoutController,
  meController,
  registerController,
} from "./auth.controllers.js"

const AuthRouter = Router()

AuthRouter.post("/login", asyncHandler(loginController))
AuthRouter.post("/register", asyncHandler(registerController))

AuthRouter.use(asyncHandler(authGuard))
AuthRouter.post("/logout", asyncHandler(logoutController))
AuthRouter.get("/me", asyncHandler(meController))

export default AuthRouter
