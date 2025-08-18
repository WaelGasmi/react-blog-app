import app from "./app.js"
import { PORT } from "./config/index.js"

console.clear()

app.listen(PORT, (err) => {
  if (err) {
    console.log("server not running")
  }
  console.log(`Server running at ${PORT}`)
})
