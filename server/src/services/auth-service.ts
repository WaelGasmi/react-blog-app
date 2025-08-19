import { AppError } from "../utils/AppError.js"
import { verifyPassword } from "../utils/bcryptjs-helper.js"
import { generateToken } from "../utils/jwt-helpers.js"
import { LoginInput, RegisterInput } from "../utils/types.js"
import { createUser, getUser, validateUser } from "../utils/user-helpers.js"

export const loginService = async ({ email, password }: LoginInput) => {
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
}: RegisterInput) => {
  if (!email || !password || !firstName || !lastName)
    throw new AppError("fields are required", 401)

  const { user: existingUser } = await validateUser(email)
  if (existingUser) throw new AppError("user already found", 401)

  const { user } = await createUser(firstName, lastName, email, password)
  const { password: _, ...safeUser } = user
  const { token } = await generateToken(user.id)

  return { user: safeUser, token }
}

export const getCurrentUserService = async (id: string) => {
  const { user } = await getUser(id)
  if (!user) throw new AppError("user not found", 401)
  const { password: _, ...safeUser } = user

  return { user: safeUser }
}
