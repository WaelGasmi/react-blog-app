import { NextFunction, Request, Response } from "express"
import { AppError } from "../utils/AppError.js"

export const globalErrorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  err.status = err.status || "error"
  err.statusCode = err.statusCode || 500

  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
  })
}
