import { NextFunction, Request, Response } from "express"
import { AppError } from "../utils/AppError.js"

export const adminGuard = (
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const role = req.role
  if (!role || role.toLocaleLowerCase() !== "admin")
    throw new AppError("access denied", 401)

  next()
}
