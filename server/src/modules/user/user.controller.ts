import { Request, Response } from "express"
import { successResponse } from "../../utils/response.js"
import {
  addUserService,
  deleteUserService,
  getUserService,
  getUsersService,
  updateUserService,
} from "./user.service.js"

export const getUsersController = async (_req: Request, res: Response) => {
  const users = await getUsersService()
  return successResponse(res, users)
}

export const getUserController = async (req: Request, res: Response) => {
  const user = await getUserService(req.params.id)
  return successResponse(res, user)
}

export const addUserController = async (req: Request, res: Response) => {
  const newUser = await addUserService(req.body)
  return successResponse(res, newUser)
}

export const updateUserController = async (req: Request, res: Response) => {
  const updatedUser = await updateUserService(req.body)
  return successResponse(res, updatedUser)
}

export const deleteUserController = async (req: Request, res: Response) => {
  const deletedUser = await deleteUserService(req.params.id)
  return successResponse(res, deletedUser)
}
