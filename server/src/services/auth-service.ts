import { prisma } from "../prisma/prismaClient.js"
import { AppError } from "../utils/AppError.js"
import { hashPassword, verifyPassword } from "../utils/bcryptjs-helpers.js"
import { generateToken } from "../utils/jwt-helpers.js"
import { User } from "../utils/types.js"
import { validateUser } from "../utils/validateUser.js"

type LoginServiceInput = Pick<User, "email" | "password">
type RegisterServiceInput = Omit<User, "id">

export const loginService = async ({ email, password }: LoginServiceInput) => {
  if (!email || !password) throw new AppError("Wrong Credentials", 401)

  const { user } = await validateUser(email)
  if (!user) throw new AppError("user not found", 401)

  const { isMatch } = await verifyPassword(user.password, password)
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
}: RegisterServiceInput) => {
  if (!email || !password || !firstName || !lastName)
    throw new AppError("fields are required", 401)

  const { user: existingUser } = await validateUser(email)
  if (existingUser) throw new AppError("user already found", 401)

  const { hashedPassword } = await hashPassword(password)

  const newUser = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: hashedPassword,
    },
  })
  const { password: _, ...safeUser } = newUser

  const { token } = await generateToken(newUser.id)

  return { user: safeUser, token }
}
