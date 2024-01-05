import Slider from "../models/heroSliderSchema.js";
import cloudinary from "cloudinary";

export const createSlider = async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title || !description) {
      return res
        .status(400)
        .json({ error: "title and description are required fields" });
    }

    const result = await cloudinary.uploader.upload(req.file.path);

    const newSlider = new Slider({
      image: result.secure_url,
      title: title,
      description: description,
    });

    await newSlider.save();

    res
      .status(201)
      .json({ message: "Slider added successfully", Slider: newSlider });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const getAllHeroSlider = async (req,res)=>{
    try {
        const slider = await Slider.find({})
        res.status(200).json(slider)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}