import { AppError } from "../../utils/AppError.js"
import { comparePassword } from "../../utils/bcryptjs.js"
import { generateToken } from "../../utils/jwt.js"
import { LoginInput, RegisterInput } from "../../utils/types.js"
import {
  addUserService,
  getUserByEmailService,
  getUserService,
} from "../user/user.service.js"

export const loginService = async ({ email, password }: LoginInput) => {
  if (!email || !password) throw new AppError("Wrong Credentials", 401)

  const user = await getUserByEmailService(email)
  if (!user) throw new AppError("user not found", 401)

  const isMatch = await comparePassword(user.password, password)
  if (!isMatch) throw new AppError("wrong credentials", 401)

  const token = await generateToken(user.id)
  const { password: _, ...safeUser } = user

  return { user: safeUser, token }
}

export const registerService = async ({
  firstName,
  lastName,
  email,
  password,
}: RegisterInput) => {
  if (!email || !password || !firstName || !lastName)
    throw new AppError("fields are required", 401)

  const existingUser = await getUserByEmailService(email)
  if (existingUser) throw new AppError("user already found", 401)

  const user = await addUserService({ firstName, lastName, email, password })
  const { password: _, ...safeUser } = user
  const token = await generateToken(user.id)

  return { user: safeUser, token }
}

export const meService = async (id: string) => {
  const user = await getUserService(id)
  if (!user) throw new AppError("user not found", 401)
  const { password: _, ...safeUser } = user

  return safeUser
}
