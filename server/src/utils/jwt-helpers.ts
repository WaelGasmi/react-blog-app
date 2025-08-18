import jwt, { SignOptions } from "jsonwebtoken"
import { SECRET_KEY } from "../config/index.js"

const signOptions: SignOptions = {
  expiresIn: "1d",
}

export const generateToken = async (user: string) => {
  const token = jwt.sign({ user }, SECRET_KEY, signOptions)
  return { token }
}
