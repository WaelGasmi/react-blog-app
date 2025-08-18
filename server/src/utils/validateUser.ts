import { prisma } from "../prisma/prismaClient.js"

export const validateUser = async (email: string) => {
  const user = await prisma.user.findUnique({ where: { email } })
  return { user }
}
