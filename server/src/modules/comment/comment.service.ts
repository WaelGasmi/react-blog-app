import { prisma } from "../../configs/db.js"
import { AppError } from "../../utils/AppError.js"
import { Comment, CommentDTO } from "../../utils/types.js"

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

export const commentReactService = async (type: string, commentId: string) => {
  if (type === "like")
    return prisma.comment.update({
      where: { id: commentId },
      data: { like: { increment: 1 } },
    })
  else if (type === "dislike")
    return prisma.comment.update({
      where: { id: commentId },
      data: { dislike: { increment: 1 } },
    })
  else throw new AppError("react type invalid", 400)
}

export const deleteCommentService = async (commentId: string) => {
  return await prisma.comment.delete({
    where: { id: commentId },
  })
}
