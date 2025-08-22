export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string

  posts: Post[]
  comments: Comment[]
}

export type Post = {
  id: string
  title: string
  userId: string
  
  user: User
  comments: Comment[]
}

export type Comment = {
  id: string
  content: string
  userId: string
  postId: string

  user: User
  post: Post
}

export type LoginInput = Pick<User, "email" | "password">
export type RegisterInput = Omit<User, "id">
export type SafeUser = Omit<User, "password">
