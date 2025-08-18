import { CookieOptions, Request, Response } from "express"
import { loginService, registerService } from "../services/auth-service.js"
import { sendSuccess } from "../middlewares/response-handler.js"
import { User } from "../utils/types.js"

const cookiesOptions: CookieOptions = {
  sameSite: "none",
  maxAge: 1000 * 60 * 60 * 24,
  secure: true,
  httpOnly: true,
}

type SafeUser = Omit<User, "password">

export const loginController = async (req: Request, res: Response) => {
  const { user, token } = await loginService(req.body)
  res.cookie("token", token, cookiesOptions)
  sendSuccess<SafeUser>(res, user)
}

export const registerController = async (req: Request, res: Response) => {
  const { user, token } = await registerService(req.body)
  res.cookie("token", token, cookiesOptions)
  sendSuccess<SafeUser>(res, user)
}
