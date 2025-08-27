export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string

  posts?: Post[]
  comments?: Comment[]
}

export type Post = {
  id: string
  title: string
  userId: string

  user?: User
  comments?: Comment[]
}

export type Comment = {
  id: string
  content: string
  userId: string
  like: Number
  dislike: Number
  postId: string
  commentId?: string

  user?: User
  post?: Post
  comment?: Comment
}

export type LoginInput = Pick<User, "email" | "password">
export type RegisterInput = Omit<User, "id">
export type SafeUser = Omit<User, "password">
export type AuthUser = {
  user: SafeUser
  token: string
}

export type CommentDTO = {
  userId: string
  content?: string
  commentId?: string
  like?: Number
  dislike?: Number
  postId?: string
}

export type UserDTO = {
  firstName: string
  lastName: string
  email: string
  password: string
}
