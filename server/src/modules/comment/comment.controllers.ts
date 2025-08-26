import { Request, Response } from "express"
import { Comment } from "../../utils/types.js"
import { successResponse } from "../../utils/response.js"
import {
  addCommentService,
  deleteCommentService,
  getCommentsByPostService,
  updateCommentService,
} from "./comment.service.js"

export const getCommentsByPostController = async (
  req: Request,
  res: Response
) => {
  const comments = await getCommentsByPostService(req.body)
  return successResponse<Comment[]>(res, comments)
}

export const addCommentController = async (req: Request, res: Response) => {
  const { content, userId, postId } = req.body
  const newComment = await addCommentService({ content, userId, postId })
  return successResponse<Comment>(res, newComment)
}

export const updateCommentController = async (req: Request, res: Response) => {
  const updatedComment = await updateCommentService(req.body)
  return successResponse<Comment>(res, updatedComment)
}

export const deleteCommentController = async (req: Request, res: Response) => {
  const deletedComment = await deleteCommentService(req.body)
  return successResponse<Comment>(res, deletedComment)
}
