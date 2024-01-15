import express from "express"
import { createUser, getAllUsers, getUserById, updateUser } from "../controller/userController.js"
import { checkRole, verifyToken } from "../middleware/verifyToken.js"

export const UserRoutes = express.Router()

UserRoutes.get("/users",getAllUsers)
UserRoutes.get("/users/:id",getUserById)
UserRoutes.post("/users",verifyToken,checkRole(["admin", "superAdmin"]),createUser)
UserRoutes.put('/users/:id', verifyToken, updateUser);