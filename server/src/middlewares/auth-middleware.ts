import { NextFunction, Request, Response } from "express"
import {} from "../utils/types.js"
import { AppError } from "../utils/AppError.js"
import { SECRET_KEY } from "../config/index.js"
import jwt from "jsonwebtoken"

type JWTPayload = {
  user: { id: string }
}

export const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const authHeader = req.headers.authorization
    if (!authHeader) throw new AppError("unauthorized", 401)

    const token = authHeader.split(" ")[1]
    const payload = jwt.verify(token, SECRET_KEY) as JWTPayload
    req.user = { id: payload.user.id }

    next()
  } catch (error) {
    throw new AppError("Error", 500)
  }
}
