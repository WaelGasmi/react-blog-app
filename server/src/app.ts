import express from "express"
import { globalErrorHandler } from "./middlewares/error-handler.js"
import * as routers from "./routes/index.js"

const app = express()
app.use(express.json())
app.use("/api/auth", routers.AuthRouter)

app.use(globalErrorHandler)

export default app
