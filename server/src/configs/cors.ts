import { CorsOptions } from "cors"
import { ALLOWED_ORIGINS } from "./env.js"

const corsConfig: CorsOptions = {
  origin: ALLOWED_ORIGINS?.split(",") || [],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Authorization", "Content-Type"],
  credentials: true,
}

export default corsConfig
