import { prisma } from "../../configs/db.js"
import { Comment, CommentDTO } from "../../utils/types.js"

export const getCommentsByPostService = async (userId: string) => {
  return await prisma.comment.findMany({ where: { userId } })
}

export const addCommentService = async ({
  content,
  userId,
  postId,
}: CommentDTO) => {
  return await prisma.comment.create({
    data: {
      content: content,
      userId: userId,
      postId: postId,
    },
  })
}

export const updateCommentService = async (comment: Comment) => {
  return await prisma.comment.update({
    where: { id: comment.id },
    data: {
      content: comment.content,
      userId: comment.userId,
      postId: comment.postId,
    },
  })
}

export const deleteCommentService = async (commentId: string) => {
  return await prisma.comment.delete({
    where: { id: commentId },
  })
}
