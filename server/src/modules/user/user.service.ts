import { prisma } from "../../configs/db.js"
import { hashPassword } from "../../utils/bcryptjs.js"
import { User, UserDTO } from "../../utils/types.js"

export const getUsersService = async () => {
  return prisma.user.findMany()
}

export const getUserService = async (userId: string) => {
  return prisma.user.findUnique({ where: { id: userId } })
}

export const addUserService = async ({
  firstName,
  lastName,
  email,
  password,
}: UserDTO) => {
  const hashedPassword = await hashPassword(password)
  return await prisma.user.create({
    data: {
      email,
      firstName,
      lastName,
      password: hashedPassword,
    },
  })
}

export const updateUserService = async (user: User) => {
  return prisma.user.update({
    where: { id: user.id },
    data: {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
  })
}

export const deleteUserService = async (userId: string) => {
  return prisma.user.delete({ where: { id: userId } })
}

export const getUserByEmailService = async (email: string) => {
  return prisma.user.findUnique({ where: { email } })
}
