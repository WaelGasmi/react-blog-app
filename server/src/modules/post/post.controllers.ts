import { Request, Response } from "express"
import { Post } from "../../utils/types.js"
import { successResponse } from "../../utils/response.js"
import {
  addPostService,
  deletePostService,
  getAllPostsService,
  getPostsByUserService,
  getPostService,
  updatePostService,
} from "./post.service.js"

export const getAllPostsController = async (_req: Request, res: Response) => {
  const posts = await getAllPostsService()
  return successResponse<Post[]>(res, posts)
}

export const getPostController = async (req: Request, res: Response) => {
  const post = await getPostService(req.params.postId)
  return successResponse<Post>(res, post)
}

export const getPostsByUserController = async (req: Request, res: Response) => {
  const { id: userId } = req.params
  const posts = await getPostsByUserService(userId)
  return successResponse<Post[]>(res, posts)
}

export const addPostController = async (req: Request, res: Response) => {
  const newPost = await addPostService(req.body)
  return successResponse<Post>(res, newPost)
}

export const updatePostController = async (req: Request, res: Response) => {
  const updatedPost = await updatePostService(req.body)
  return successResponse<Post>(res, updatedPost)
}

export const deletePostController = async (req: Request, res: Response) => {
  const deletedPost = await deletePostService(req.body)
  return successResponse<Post>(res, deletedPost)
}
