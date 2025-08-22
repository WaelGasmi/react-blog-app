import Router from "express"
import * as controllers from "../controllers/post-controllers.js"
import { authMiddleware } from "../middlewares/auth-middleware.js"
import asyncHandler from "express-async-handler"

const PostRouter = Router()

PostRouter.get("/", asyncHandler(controllers.getAllPosts))
PostRouter.get("/:id", asyncHandler(controllers.getPost))
PostRouter.get("/user/:id/posts", asyncHandler(controllers.getPostsByUser))

PostRouter.use(authMiddleware)
PostRouter.post("/", asyncHandler(controllers.addPost))
PostRouter.put("/:id", asyncHandler(controllers.updatePost))
PostRouter.delete("/:id", asyncHandler(controllers.deletePost))

export default PostRouter
