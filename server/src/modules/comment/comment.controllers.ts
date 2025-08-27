import { Request, Response } from "express"
import { successResponse } from "../../utils/response.js"
import {
  addCommentService,
  deleteCommentService,
  getCommentsByPostService,
  updateCommentContentService,
} from "./comment.service.js"

export const getCommentsByPostController = async (
  req: Request,
  res: Response
) => {
  const comments = await getCommentsByPostService(req.params.postId)
  return successResponse(res, comments)
}

export const addCommentController = async (req: Request, res: Response) => {
  const newComment = await addCommentService(req.body)
  return successResponse(res, newComment)
}

export const updateCommentContentController = async (
  req: Request,
  res: Response
) => {
  const { content } = req.body
  const userId = req.userId
  const commentId = req.params.commentId
  const updatedComment = await updateCommentContentService(
    content,
    userId,
    commentId
  )
  return successResponse(res, updatedComment)
}

export const commentReactController = async (req: Request, res: Response) => {}

export const deleteCommentController = async (req: Request, res: Response) => {
  const deletedComment = await deleteCommentService(req.params.commentId)
  return successResponse(res, deletedComment)
}
