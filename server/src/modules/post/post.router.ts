import Router from "express"
import asyncHandler from "express-async-handler"
import { authGuard } from "../../middlewares/authGuard.js"
import {
  addPostController,
  deletePostController,
  getAllPostsController,
  getPostController,
  getPostsByUserController,
  updatePostController,
} from "./post.controllers.js"

const PostRouter = Router()

PostRouter.get("/", asyncHandler(getAllPostsController))
PostRouter.get("/:id", asyncHandler(getPostController))
PostRouter.get("/user/:id/posts", asyncHandler(getPostsByUserController))

PostRouter.use(authGuard)
PostRouter.post("/", asyncHandler(addPostController))
PostRouter.put("/:id", asyncHandler(updatePostController))
PostRouter.delete("/:id", asyncHandler(deletePostController))

export default PostRouter
