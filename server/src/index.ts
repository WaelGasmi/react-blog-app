import { PORT } from "./config/index.js"
import { server } from "./socket.js"

console.clear()

server.listen(PORT, () => {
  console.log(`Server running at ${PORT}`)
})
