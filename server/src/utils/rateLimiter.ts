import rateLimit from "express-rate-limit"

const WINDOW_MS = 50000
const MAX = 30

export const limiter = rateLimit({
  windowMs: WINDOW_MS,
  max: MAX,
  message: "too many request, please try again",
})
