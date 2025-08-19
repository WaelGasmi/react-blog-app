import { NextFunction, Request, Response } from "express"
import { AppError } from "../utils/AppError.js"
import { verifyToken } from "../utils/jwt-helpers.js"
import { JwtPayload } from "jsonwebtoken"

export interface AuthRequest extends Request {
  user?: JwtPayload | string
}

export const authMiddleware = async (
  req: AuthRequest,
  _res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization
  if (!authHeader) throw new AppError("no token provided", 401)

  const [bearer, token] = authHeader.split(" ")
  if (bearer !== "Bearer" || !token)
    throw new AppError("invalid token format", 401)

  req.user = await verifyToken(token)

  next()
}
