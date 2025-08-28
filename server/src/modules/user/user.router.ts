import Router from "express"
import {
  deleteUserController,
  getUserController,
  getUsersController,
  updateUserController,
} from "./user.controller.js"
import AuthRouter from "../auth/auth.router.js"
import { authGuard } from "../../middlewares/authGuard.js"
import asyncHandler from "express-async-handler"

const UserRouter = Router()

AuthRouter.use(asyncHandler(authGuard))

UserRouter.get("/", asyncHandler(getUsersController))
UserRouter.get("/:id", asyncHandler(getUserController))
UserRouter.put("/", asyncHandler(updateUserController))
UserRouter.delete("/", asyncHandler(deleteUserController))

export default UserRouter
