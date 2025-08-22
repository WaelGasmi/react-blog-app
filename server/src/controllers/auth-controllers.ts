import { CookieOptions, Request, Response } from "express"
import * as services from "../services/auth-service.js"
import { sendSuccess } from "../middlewares/response-handler.js"
import { SafeUser } from "../utils/types.js"
import { AppError } from "../utils/AppError.js"

const cookiesOptions: CookieOptions = {
  sameSite: true,
  maxAge: 1000 * 60 * 60 * 24,
  secure: true,
  httpOnly: true,
}

export const login = async (req: Request, res: Response) => {
  const { user, token } = await services.login(req.body)
  res.cookie("token", { token }, cookiesOptions)
  sendSuccess<any>(res, { user, token })
}

export const register = async (req: Request, res: Response) => {
  const { user, token } = await services.register(req.body)
  res.cookie("token", token, cookiesOptions)
  sendSuccess<SafeUser>(res, user)
}

export const logout = async (_req: Request, res: Response) => {
  res.clearCookie("token")
  sendSuccess<SafeUser>(res)
}

export const getCurrentUser = async (req: Request, res: Response) => {
  if (!req.userId) throw new AppError("user not authenticated", 401)
  const userId = req.userId
  const { user } = await services.getCurrentUser(userId)
  sendSuccess<SafeUser>(res, user)
}
