export type User = {
  id: string
  firstName: string
  lastName: string
  email: string
  password: string
}

export type LoginInput = Pick<User, "email" | "password">
export type RegisterInput = Omit<User, "id">
export type SafeUser = Omit<User, "password">
