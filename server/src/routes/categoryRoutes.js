import express from "express"
import { checkRole, verifyToken } from "../middleware/verifyToken.js"
import { createCategory, deleteCategory, getAllCategories, getCategoryById, updateCategory } from "../controller/categoryController.js"

export const CategoryRoutes = express.Router()

CategoryRoutes.post("/categories",verifyToken,checkRole(["admin","superAdmin"]),createCategory)
CategoryRoutes.get("/categories",getAllCategories)
CategoryRoutes.get("/categories/:id",getCategoryById)
CategoryRoutes.delete("/categories/:id",verifyToken,checkRole(["admin","superAdmin"]),deleteCategory)
CategoryRoutes.put("/categories/:id",verifyToken,checkRole(["admin","superAdmin"]),updateCategory)