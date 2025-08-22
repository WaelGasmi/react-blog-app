import { Request, Response } from "express"
import { sendSuccess } from "../middlewares/response-handler.js"
import * as services from "../services/post-service.js"
import { Comment } from "../utils/types.js"

export const getCommentsByPost = async (req: Request, res: Response) => {
  const posts = await services.getCommentsByPost(req.body)
  return sendSuccess<Comment[]>(res, posts)
}

export const addComment = async (req: Request, res: Response) => {
  await services.addComment(req.body)
  return sendSuccess<any>(res)
}

export const updateComment = async (req: Request, res: Response) => {
  await services.updateComment(req.body)
  return sendSuccess<any>(res)
}

export const deleteComment = async (req: Request, res: Response) => {
  await services.deleteComment(req.body)
  return sendSuccess<any>(res)
}
