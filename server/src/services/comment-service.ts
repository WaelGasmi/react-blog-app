import { prisma } from "../prisma/prismaClient.js"
import { Comment } from "../utils/types.js"

export const getCommentsByPost = async (userId: string) => {
  const comments = await prisma.comment.findMany({ where: { userId } })
  return comments
}

export const addComment = async (comment: Comment) => {
  const newComment = await prisma.comment.create({
    data: {
      content: comment.content,
      userId: comment.userId,
      postId: comment.postId,
    },
  })
  return newComment
}

export const updateComment = async (comment: Comment) => {
  const updatedComment = await prisma.comment.update({
    where: { id: comment.id },
    data: {
      content: comment.content,
      userId: comment.userId,
      postId: comment.postId,
    },
  })
  return updatedComment
}

export const deleteComment = async (commentId: string) => {
  const deletedComment = await prisma.comment.delete({
    where: { id: commentId },
  })
  return deletedComment
}
