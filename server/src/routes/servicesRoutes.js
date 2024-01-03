import express from "express"
import { createServices, getAllServices } from "../controller/servicesController.js";
import upload from "../middleware/upload.js";

export const ServicesRoutes = express.Router();

ServicesRoutes.get("/services",getAllServices)
ServicesRoutes.post("/services",upload.single('image'),createServices)