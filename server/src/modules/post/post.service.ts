import { prisma } from "../../configs/db.js"
import { AppError } from "../../utils/AppError.js"
import { Post } from "../../utils/types.js"

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

export const postReactService = async (type: string, postId: string) => {
  if (type === "like")
    return prisma.post.update({
      where: { id: postId },
      data: { like: { increment: 1 } },
    })
  else if (type === "dislike")
    return prisma.post.update({
      where: { id: postId },
      data: { dislike: { increment: 1 } },
    })
  else throw new AppError("react type invalid", 400)
}

export const deletePostService = async (postId: string) => {
  return await prisma.post.delete({ where: { id: postId } })
}
