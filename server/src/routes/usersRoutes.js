import express from "express"
import { getAllUsers } from "../controller/userController.js"

export const UserRoutes = express.Router()

UserRoutes.get("/users",getAllUsers)