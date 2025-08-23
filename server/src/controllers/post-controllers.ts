import { Request, Response } from "express"
import { sendSuccess } from "../middlewares/response-handler.js"
import * as services from "../services/post-service.js"
import { Post } from "../utils/types.js"

export const getAllPosts = async (_req: Request, res: Response) => {
  const posts = await services.getAllPosts()
  return sendSuccess<Post[]>(res, posts)
}

export const getPost = async (req: Request, res: Response) => {
  const post = await services.getPost(req.body)
  return sendSuccess<Post>(res, post)
}

export const getPostsByUser = async (req: Request, res: Response) => {
  const posts = await services.getPostsByUser(req.body)
  return sendSuccess<Post[]>(res, posts)
}

export const addPost = async (req: Request, res: Response) => {
  const post = await services.addPost(req.body)
  return sendSuccess<Post>(res, post)
}

export const updatePost = async (req: Request, res: Response) => {
  const updatedPost = await services.updatePost(req.body)
  return sendSuccess<Post>(res, updatedPost)
}

export const deletePost = async (req: Request, res: Response) => {
  const deletedPost = await services.deletePost(req.body)
  return sendSuccess<Post>(res, deletedPost)
}
