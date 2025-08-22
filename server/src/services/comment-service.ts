import { prisma } from "../prisma/prismaClient.js"
import { Comment } from "../utils/types.js"

export const getCommentsByPost = async (userId: string) => {
  const comments = await prisma.comment.findMany({ where: { userId } })
  return comments
}

export const addComment = async (comment: Comment) => {
  await prisma.comment.create({
    data: {
      content: comment.content,
      userId: comment.userId,
      postId: comment.postId,
    },
  })
}

export const updateComment = async (updatedComment: Comment) => {
  await prisma.comment.update({
    where: { id: updatedComment.id },
    data: {
      content: updatedComment.content,
      userId: updatedComment.userId,
      postId: updatedComment.postId,
    },
  })
}

export const deleteComment = async (commentId: string) => {
  await prisma.comment.delete({ where: { id: commentId } })
}
