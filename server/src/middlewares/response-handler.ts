import { Response } from "express"

export const sendSuccess = <T>(
  res: Response,
  data: T,
  message: string = "Success",
  statusCode: number = 200
) => {
  res.status(statusCode).json({
    message,
    data,
    status: "success",
  })
}
