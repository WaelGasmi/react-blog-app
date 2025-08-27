import dotenv from "dotenv"
import { Secret } from "jsonwebtoken"

dotenv.config()

export const PORT: number = Number(process.env.PORT) || 5000
export const SECRET_KEY: Secret = process.env.SECRET_KEY || "Ls9IirzDilsKhPn"
export const NODE_ENV = process.env.NODE_ENV
export const ALLOWED_ORIGINS = process.env.ALLOWED_ORIGINS
