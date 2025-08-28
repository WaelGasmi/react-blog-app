import { prisma } from "../../configs/prisma.js"
import { ReactionType, Post } from "../../generated/prisma/index.js"
import { AppError } from "../../utils/AppError.js"

export const getAllPostsService = async () => {
  return await prisma.post.findMany()
}

export const getPostService = async (postId: string) => {
  const newPost = await prisma.post.findUnique({ where: { id: postId } })
  if (!newPost) throw new AppError("post not found", 400)
  return newPost
}

export const getPostsByUserService = async (userId: string) => {
  return await prisma.post.findMany({ where: { userId } })
}

export const addPostService = async (post: Post) => {
  return await prisma.post.create({
    data: {
      title: post.title,
      userId: post.userId,
    },
  })
}

export const updatePostService = async (post: Post) => {
  return await prisma.post.update({
    where: { id: post.id },
    data: {
      title: post.title,
      userId: post.userId,
    },
  })
}

export const addPostReactService = async (
  type: ReactionType,
  postId: string,
  userId: string
) => {
  return await prisma.postReaction.create({
    data: {
      type,
      userId,
      postId,
    },
  })
}

export const updatePostReactService = async (
  type: ReactionType,
  postId: string,
  userId: string
) => {
  return await prisma.postReaction.update({
    where: {
      postId_userId: {
        postId,
        userId,
      },
    },
    data: {
      type,
    },
  })
}

export const deletePostService = async (postId: string) => {
  return await prisma.post.delete({ where: { id: postId } })
}

export const deletePostReactService = async (
  postId: string,
  userId: string
) => {
  return await prisma.postReaction.delete({
    where: {
      postId_userId: {
        userId,
        postId,
      },
    },
  })
}
