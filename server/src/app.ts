import express from "express"
import cors from "cors"
import helmet from "helmet"
import morgan from "morgan"
import { errorHandler } from "./middlewares/errorHandler.js"
import * as routers from "./routers/routers.js"
import { limiter } from "./utils/rateLimiter.js"
import corsConfig from "./configs/cors.js"
import helmetConfig from "./configs/helmet.js"
import morganConfig from "./configs/morgan.js"

const app = express()

app
  .use(express.json())
  .use(helmet(helmetConfig))
  .use(cors(corsConfig))
  .use(morgan(morganConfig))
  .use(limiter)

app.use("/api/auth", routers.AuthRouter)
app.use("/api/post", routers.PostRouter)
app.use("/api/comment", routers.CommentRouter)

app.use(errorHandler)

export default app
