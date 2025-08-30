import axios from "axios"

const baseURL = import.meta.env.BASE_URL
const headers = { "Content-Type": "application/json" }
const withCredentials = true

export const api = axios.create({
  baseURL,
  headers,
  withCredentials,
})
