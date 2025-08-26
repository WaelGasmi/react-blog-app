import { Request, Response } from "express"
import { AuthUser, SafeUser } from "../../utils/types.js"
import { AppError } from "../../utils/AppError.js"
import { successResponse } from "../../utils/response.js"
import { loginService, meService, registerService } from "./auth.service.js"
import { clearAuthCookie, setAuthCookie } from "../../utils/cookie.js"

export const loginController = async (req: Request, res: Response) => {
  const { user, token } = await loginService(req.body)
  setAuthCookie(res, token)
  successResponse<AuthUser>(res, { user, token })
}

export const registerController = async (req: Request, res: Response) => {
  const { user, token } = await registerService(req.body)
  setAuthCookie(res, token)
  successResponse<SafeUser>(res, user)
}

export const logoutController = async (_req: Request, res: Response) => {
  clearAuthCookie(res)
  successResponse<SafeUser>(res)
}

export const meController = async (req: Request, res: Response) => {
  if (!req.userId) throw new AppError("user not authenticated", 401)
  const user = await meService(req.userId)
  successResponse<SafeUser>(res, user)
}
