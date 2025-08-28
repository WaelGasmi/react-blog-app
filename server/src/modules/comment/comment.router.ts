import Router from "express"
import asyncHandler from "express-async-handler"
import { authGuard } from "../../middlewares/authGuard.js"
import {
  addCommentController,
  deleteCommentController,
  updateCommentContentController,
  getCommentsByPostController,
  deleteCommentReactController,
  updateCommentReactController,
  addCommentReactController,
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
CommentRouter.delete("/react/:id", asyncHandler(deleteCommentReactController))
CommentRouter.post("/react/:id", asyncHandler(addCommentReactController))
CommentRouter.put("/react/:id", asyncHandler(updateCommentReactController))

export default CommentRouter
