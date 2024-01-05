import express from "express"
import { createSlider, getAllHeroSlider } from "../controller/heroSliderController.js"
import upload from "../middleware/upload.js"

export const HeroSliderRouter = express.Router()

HeroSliderRouter.post("/heroslider",upload.single('image'),createSlider)
HeroSliderRouter.get("/heroslider",getAllHeroSlider)