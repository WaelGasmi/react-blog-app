import { Router } from "express"
import asyncHandler from "express-async-handler"
import {
  loginController,
  registerController,
} from "../controllers/auth-controllers.js"
import { authMiddleware } from "../middlewares/auth-middleware.js"

const AuthRouter = Router()

AuthRouter.post("/login", asyncHandler(loginController))
AuthRouter.post("/register", asyncHandler(registerController))

AuthRouter.use(authMiddleware)

export default AuthRouter
