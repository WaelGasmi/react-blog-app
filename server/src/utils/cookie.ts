import { Response } from "express"
import { CookieOptions } from "express"

export const COOKIE_OPTIONS: CookieOptions = {
  sameSite: "strict",
  maxAge: 1000 * 60 * 60 * 24,
  secure: true,
  httpOnly: true,
}

export const setAuthCookie = (res: Response, token: string) => {
  res.cookie("token", token, COOKIE_OPTIONS)
}

export const clearAuthCookie = (res: Response) => {
  res.clearCookie("token", COOKIE_OPTIONS)
}
