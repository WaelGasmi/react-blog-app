import { Response } from "express"

export const successResponse = (
  res: Response,
  data?: any,
  message: string = "Success",
  statusCode: number = 200
) => {
  res.status(statusCode).json({
    message,
    data,
    status: "success",
  })
}
