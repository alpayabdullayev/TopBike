import express from "express"
import { createServices, deleteServiceById, getAllServices, getProductById } from "../controller/servicesController.js";
import upload from "../middleware/upload.js";

export const ServicesRoutes = express.Router();

ServicesRoutes.get("/services",getAllServices)
ServicesRoutes.get("/services/:id",getProductById)
ServicesRoutes.delete("/services/:id",deleteServiceById)
ServicesRoutes.post("/services",upload.single('image'),createServices)