import { Router } from "express"
import asyncHandler from "express-async-handler"
import * as controllers from "../controllers/auth-controllers.js"
import { authMiddleware } from "../middlewares/auth-middleware.js"

const AuthRouter = Router()

AuthRouter.post("/login", asyncHandler(controllers.login))
AuthRouter.post("/register", asyncHandler(controllers.register))

AuthRouter.use(asyncHandler(authMiddleware))
AuthRouter.post("/logout", asyncHandler(controllers.logout))
AuthRouter.get("/me", asyncHandler(controllers.getCurrentUser))

export default AuthRouter
