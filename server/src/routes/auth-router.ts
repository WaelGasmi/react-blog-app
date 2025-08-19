import { Router } from "express"
import asyncHandler from "express-async-handler"
import * as controllers from "../controllers/auth-controllers.js"
import { authMiddleware } from "../middlewares/auth-middleware.js"

const AuthRouter = Router()

AuthRouter.post("/login", asyncHandler(controllers.loginController))
AuthRouter.post("/register", asyncHandler(controllers.registerController))

AuthRouter.use(asyncHandler(authMiddleware))
AuthRouter.post("/logout", asyncHandler(controllers.logoutController))
AuthRouter.get("/me", asyncHandler(controllers.getCurrentUserController))

export default AuthRouter
