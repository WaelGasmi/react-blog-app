import { CookieOptions, Request, Response } from "express"
import * as services from "../services/auth-service.js"
import { sendSuccess } from "../middlewares/response-handler.js"
import { SafeUser } from "../utils/types.js"
import { AppError } from "../utils/AppError.js"
import { AuthRequest } from "../middlewares/auth-middleware.js"
import { JwtPayload } from "jsonwebtoken"

const cookiesOptions: CookieOptions = {
  sameSite: true,
  maxAge: 1000 * 60 * 60 * 24,
  secure: true,
  httpOnly: true,
}

export const loginController = async (req: Request, res: Response) => {
  const { user, token } = await services.loginService(req.body)
  res.cookie("token", { token }, cookiesOptions)
  sendSuccess<any>(res, { user, token: { token } })
}

export const registerController = async (req: Request, res: Response) => {
  const { user, token } = await services.registerService(req.body)
  res.cookie("token", token, cookiesOptions)
  sendSuccess<SafeUser>(res, user)
}

export const logoutController = async (req: Request, res: Response) => {
  res.clearCookie("token")
  sendSuccess<SafeUser>(res)
}

export const getCurrentUserController = async (
  req: AuthRequest,
  res: Response
) => {
  if (!req.user) throw new AppError("user not authenticated", 401)
  const userId = (req.user as JwtPayload).id
  const { user } = await services.getCurrentUserService(userId)
  sendSuccess<SafeUser>(res, user)
}
