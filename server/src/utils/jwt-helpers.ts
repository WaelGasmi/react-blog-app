import jwt, { JwtPayload, SignOptions } from "jsonwebtoken"
import { SECRET_KEY } from "../config/index.js"

const signOptions: SignOptions = {
  expiresIn: "1d",
}

export const generateToken = async (userId: string) => {
  const token = jwt.sign({ userId }, SECRET_KEY, signOptions)
  return token
}

export const verifyToken = async (token: string) => {
  const decoded = jwt.verify(token, SECRET_KEY)
  return decoded
}
