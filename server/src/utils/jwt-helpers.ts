import jwt, { JwtPayload, SignOptions } from "jsonwebtoken"
import { SECRET_KEY } from "../config/index.js"
import { AppError } from "./AppError.js"

const signOptions: SignOptions = {
  expiresIn: "1d",
}

export const generateToken = async (userId: string) => {
  const token = jwt.sign({ userId }, SECRET_KEY, signOptions)
  return { token }
}

export const verifyToken = async (token: string) => {
  try {
    console.log("Signing key:", SECRET_KEY)
    console.log("Verifying token:", token)
    const payload = jwt.verify(token, SECRET_KEY) as JwtPayload
    console.log("Decoded:", payload)
    return payload
  } catch (error) {
    throw new AppError("token invalid", 401)
  }
}
