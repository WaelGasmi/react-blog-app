import { Request, Response } from "express"
import { sendSuccess } from "../middlewares/response-handler.js"
import * as services from "../services/comment-service.js"
import { Comment } from "../utils/types.js"

export const getCommentsByComment = async (req: Request, res: Response) => {
  const comments = await services.getCommentsByPost(req.body)
  return sendSuccess<Comment[]>(res, comments)
}

export const addComment = async (req: Request, res: Response) => {
  const newComment = await services.addComment(req.body)
  return sendSuccess<Comment>(res, newComment)
}

export const updateComment = async (req: Request, res: Response) => {
  const updatedComment = await services.updateComment(req.body)
  return sendSuccess<Comment>(res, updatedComment)
}

export const deleteComment = async (req: Request, res: Response) => {
  const deletedComment = await services.deleteComment(req.body)
  return sendSuccess<Comment>(res, deletedComment)
}
