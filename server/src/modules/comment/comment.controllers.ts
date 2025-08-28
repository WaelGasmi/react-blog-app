import { Request, Response } from "express"
import { successResponse } from "../../utils/response.js"
import {
  addCommentReactService,
  addCommentService,
  deleteCommentReactService,
  deleteCommentService,
  getCommentsByPostService,
  updateCommentContentService,
  updateCommentReactService,
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

export const addCommentReactController = async (
  req: Request,
  res: Response
) => {
  const { type } = req.body
  const userId = req.userId
  const commentId = req.params.commentId
  const newReactComment = await addCommentReactService(type, userId, commentId)
  return successResponse(res, newReactComment)
}

export const deleteCommentReactController = async (
  req: Request,
  res: Response
) => {
  const userId = req.userId
  const commentId = req.params.commentId
  const deletedReactComment = await deleteCommentReactService(userId, commentId)
  return successResponse(res, deletedReactComment)
}

export const updateCommentReactController = async (
  req: Request,
  res: Response
) => {
  const { type } = req.body
  const userId = req.userId
  const commentId = req.params.commentId
  const updatedReactComment = await updateCommentReactService(
    type,
    userId,
    commentId
  )
  return successResponse(res, updatedReactComment)
}

export const deleteCommentController = async (req: Request, res: Response) => {
  const deletedComment = await deleteCommentService(req.params.commentId)
  return successResponse(res, deletedComment)
}
