import { Request, Response } from "express"
import { Post } from "../../utils/types.js"
import { successResponse } from "../../utils/response.js"
import {
  addPostReactService,
  addPostService,
  deletePostReactService,
  deletePostService,
  getAllPostsService,
  getPostsByUserService,
  getPostService,
  updatePostReactService,
  updatePostService,
} from "./post.service.js"

export const getAllPostsController = async (_req: Request, res: Response) => {
  const posts = await getAllPostsService()
  return successResponse(res, posts)
}

export const getPostController = async (req: Request, res: Response) => {
  const post = await getPostService(req.params.postId)
  return successResponse(res, post)
}

export const getPostsByUserController = async (req: Request, res: Response) => {
  const { id: userId } = req.params
  const posts = await getPostsByUserService(userId)
  return successResponse(res, posts)
}

export const addPostController = async (req: Request, res: Response) => {
  const newPost = await addPostService(req.body)
  return successResponse(res, newPost)
}

export const updatePostController = async (req: Request, res: Response) => {
  const updatedPost = await updatePostService(req.body)
  return successResponse(res, updatedPost)
}

export const deletePostController = async (req: Request, res: Response) => {
  const deletedPost = await deletePostService(req.body)
  return successResponse(res, deletedPost)
}

export const addPostReactController = async (
  req: Request,
  res: Response
) => {
  const { type } = req.body
  const userId = req.userId
  const postId = req.params.postId
  const newReactPost = await addPostReactService(type, userId, postId)
  return successResponse(res, newReactPost)
}

export const deletePostReactController = async (
  req: Request,
  res: Response
) => {
  const userId = req.userId
  const postId = req.params.postId
  const deletedReactPost = await deletePostReactService(userId, postId)
  return successResponse(res, deletedReactPost)
}

export const updatePostReactController = async (
  req: Request,
  res: Response
) => {
  const { type } = req.body
  const userId = req.userId
  const postId = req.params.postId
  const updatedReactPost = await updatePostReactService(
    type,
    userId,
    postId
  )
  return successResponse(res, updatedReactPost)
}