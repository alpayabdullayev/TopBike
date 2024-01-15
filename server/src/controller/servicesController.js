import Services from "../models/servicesSchema.js";
import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const getAllServices = async (req, res) => {
  try {
    const services = await Services.find({});
    res.status(200).json(services);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getProductById = async (req, res) => {
  try {
    const services = await Services.findById(req.params.id);
    if (!services) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.json(services);
  } catch (error) {
    res.status(500).send({ message: error });
  }
};

export const createServices = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({ error: "Name and description are required fields" });
    }

    const result = await cloudinary.uploader.upload(req.file.path);

    const newService = new Services({
      image: result.secure_url,
      name: name,
      description: description,
    });

    await newService.save();

    res
      .status(201)
      .json({ message: "Service added successfully", service: newService });
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteServiceById = async (req, res) => {
  try {
    const {id} = req.params
    const service = await Services.findByIdAndDelete(id);

    if (service) {
        res.status(200).json({ service });
      } else {
        res.status(404).json({ message: "Not Found" });
      }

    await cloudinary.uploader.destroy(service.image.public_id);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const updateService = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description } = req.body;

    if (!name || !description) {
      return res
        .status(400)
        .json({ error: "Name and description are required fields" });
    }

    const service = await Services.findById(id);

    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }

    if (req.file) {
      const result = await cloudinary.uploader.upload(req.file.path);
      service.image = result.secure_url;
    }

    service.name = name;
    service.description = description;

   
    await service.save();

    res.json({ message: "Service updated successfully", service });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
};

