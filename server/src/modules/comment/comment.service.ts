import { prisma } from "../../configs/prisma.js"
import { ReactionType } from "../../generated/prisma/index.js"
import { Comment } from "../../utils/types.js"

export const getCommentsByPostService = async (postId: string) => {
  return await prisma.comment.findMany({ where: { postId } })
}

export const addCommentService = async ({
  content,
  userId,
  postId,
}: Comment) => {
  return await prisma.comment.create({
    data: {
      content: content,
      userId: userId,
      postId: postId,
    },
  })
}

export const updateCommentContentService = async (
  content: string,
  userId: string,
  commentId: string
) => {
  return await prisma.comment.update({
    where: { id: commentId },
    data: {
      content: content,
      userId: userId,
    },
  })
}

export const deleteCommentReactService = async (
  commentId: string,
  userId: string
) => {
  return await prisma.commentReaction.delete({
    where: {
      commentId_userId: {
        userId,
        commentId,
      },
    },
  })
}

export const addCommentReactService = async (
  type: ReactionType,
  commentId: string,
  userId: string
) => {
  return await prisma.commentReaction.create({
    data: {
      type,
      userId,
      commentId,
    },
  })
}

export const updateCommentReactService = async (
  type: ReactionType,
  commentId: string,
  userId: string
) => {
  return await prisma.commentReaction.update({
    where: {
      commentId_userId: {
        commentId,
        userId,
      },
    },
    data: {
      type,
    },
  })
}

export const deleteCommentService = async (commentId: string) => {
  return await prisma.comment.delete({
    where: { id: commentId },
  })
}
