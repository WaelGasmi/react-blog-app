import { Server } from "socket.io"
import { createServer, Server as httpServer } from "http"
import app from "./app.js"

const server = createServer(app)

const io = new Server(server, {
  cors: { origin: ["http://localhost:5173"] },
})

io.on("connection", (socket) => {
  console.log(`user connected ${socket.id}`)

  socket.on("disconnect", () => {
    console.log(`user disconnected ${socket.id}`)
  })
})

export { server, io }
