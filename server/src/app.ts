import express from "express"
import { errorHandler } from "./middlewares/errorHandler.js"
import * as routers from "./routers/routes.js"

const app = express()

app.use(express.json())

app.use("/api/auth", routers.AuthRouter)
app.use("/api/post", routers.PostRouter)
app.use("/api/comment", routers.CommentRouter)

app.use(errorHandler)

export default app
