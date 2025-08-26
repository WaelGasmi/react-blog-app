import { NextFunction, Request, Response } from "express"
import { AppError } from "../utils/AppError.js"
import { verifyToken } from "../utils/jwt.js"

export const authGuard = async (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization
  if (!authHeader) throw new AppError("access denied", 401)

  const [bearer, token] = authHeader.split(" ")
  if (bearer !== "Bearer" || !token) throw new AppError("invalid token", 401)

  const decoded = await verifyToken(token)
  if (typeof decoded !== "object" || !decoded?.userId)
    throw new AppError("invalid token", 401)
  req.userId = decoded.userId

  next()
}
