import { prisma } from "../prisma/prismaClient.js"
import { Post } from "../utils/types.js"

export const getAllPosts = async () => {
  const posts = await prisma.post.findMany({ include: { Comment: true } })
  return posts
}

export const getPost = async (postId: string) => {
  const post = await prisma.post.findUnique({ where: { id: postId } })
  if (post) return post
}

export const getPostsByUser = async (userId: string) => {
  const posts = await prisma.post.findMany({ where: { userId } })
  return posts
}

export const addPost = async (post: Post) => {
  const newPost = await prisma.post.create({
    data: {
      title: post.title,
      userId: post.userId,
    },
  })
  return newPost
}

export const updatePost = async (post: Post) => {
  const updatedPost = await prisma.post.update({
    where: { id: post.id },
    data: {
      title: post.title,
      userId: post.userId,
    },
  })
  return updatedPost
}

export const deletePost = async (postId: string) => {
  const deletedPost = await prisma.post.delete({ where: { id: postId } })
  return deletedPost
}
