import Router from "express"
import * as controllers from "../controllers/comment-controllers.js"
import { authMiddleware } from "../middlewares/auth-middleware.js"
import asyncHandler from "express-async-handler"

const CommentRouter = Router()

CommentRouter.get(
  "/post/:id/comments",
  asyncHandler(controllers.getCommentsByPost)
)

CommentRouter.use(authMiddleware)
CommentRouter.post("/", asyncHandler(controllers.addComment))
CommentRouter.put("/:id", asyncHandler(controllers.updateComment))
CommentRouter.delete("/:id", asyncHandler(controllers.deleteComment))

export default CommentRouter
