import Router from "express"
import asyncHandler from "express-async-handler"
import { authGuard } from "../../middlewares/authGuard.js"
import {
  addPostController,
  addPostReactController,
  deletePostController,
  deletePostReactController,
  getAllPostsController,
  getPostController,
  getPostsByUserController,
  updatePostController,
  updatePostReactController,
} from "./post.controllers.js"

const PostRouter = Router()

PostRouter.get("/", asyncHandler(getAllPostsController))
PostRouter.get("/:id", asyncHandler(getPostController))
PostRouter.get("/user/:id/posts", asyncHandler(getPostsByUserController))

PostRouter.use(authGuard)

PostRouter.post("/", asyncHandler(addPostController))
PostRouter.put("/:id", asyncHandler(updatePostController))
PostRouter.delete("/:id", asyncHandler(deletePostController))
PostRouter.delete("/react/:id", asyncHandler(deletePostReactController))
PostRouter.post("/react/:id", asyncHandler(addPostReactController))
PostRouter.put("/react/:id", asyncHandler(updatePostReactController))

export default PostRouter
