import { prisma } from "../../configs/db.js"
import { Post } from "../../utils/types.js"

export const getAllPostsService = async () => {
  return await prisma.post.findMany({ include: { Comment: true } })
}

export const getPostService = async (postId: string) => {
  return await prisma.post.findUnique({ where: { id: postId } })
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

export const deletePostService = async (postId: string) => {
  return await prisma.post.delete({ where: { id: postId } })
}
