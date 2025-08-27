import Router from "express"
import asyncHandler from "express-async-handler"
import { authGuard } from "../../middlewares/authGuard.js"
import {
  addCommentController,
  deleteCommentController,
  updateCommentContentController,
  getCommentsByPostController,
} from "./comment.controllers.js"

const CommentRouter = Router()

CommentRouter.get(
  "/post/:id/comments",
  asyncHandler(getCommentsByPostController)
)

CommentRouter.use(authGuard)
CommentRouter.post("/", asyncHandler(addCommentController))
CommentRouter.put("/:id", asyncHandler(updateCommentContentController))
CommentRouter.delete("/:id", asyncHandler(deleteCommentController))

export default CommentRouter
