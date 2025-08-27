import bcrypt from "bcryptjs"

const SALT_ROUNDS = 10

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(SALT_ROUNDS)
  return await bcrypt.hash(password, salt)
}

export const comparePassword = async (
  hashedPassword: string,
  plainPassword: string
) => {
  return bcrypt.compare(hashedPassword, plainPassword)
}
