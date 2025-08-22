import { prisma } from "../prisma/prismaClient.js"
import { hashPassword } from "./bcryptjs-helper.js"
import { RegisterInput } from "./types.js"

export const validateUser = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } })
  return { user }
}

export const createUser = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  const { hashedPassword } = await hashPassword(password)
  const newUser = await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: hashedPassword,
    },
  })
  return { user: newUser }
}

export const getUser = async (id: string) => {
  const user = await prisma.user.findUnique({ where: { id } })
  return { user }
}
