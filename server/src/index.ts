import { PORT } from "./configs/env.js"
import { server } from "./socket.js"

const startServer = async () => {
  try {
    console.clear()
    server.listen(PORT, () => console.log(`Server running at ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

startServer()
