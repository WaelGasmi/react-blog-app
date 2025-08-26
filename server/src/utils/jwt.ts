import jwt, { SignOptions } from "jsonwebtoken"
import { SECRET_KEY } from "../configs/env.js"

const signOptions: SignOptions = {
  expiresIn: "1d",
}

export const generateToken = async (userId: string) => {
  return jwt.sign({ userId }, SECRET_KEY, signOptions)
}

export const verifyToken = async (token: string) => {
  return jwt.verify(token, SECRET_KEY)
}
