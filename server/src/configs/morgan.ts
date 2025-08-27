import { NODE_ENV } from "./env.js"

  const morganConfig = NODE_ENV === "production" ? "dev" : "combined"

  export default morganConfig