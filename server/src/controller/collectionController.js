import Collections from "../models/collectionSchema.js";
import cloudinary from "cloudinary";

export const createCollection = async (req, res) => {
  try {
    const { collectionType } = req.body;

    if (!collectionType) {
      return res.status(400).json({ error: "collection required fields" });
    }
    const result = await cloudinary.uploader.upload(req.file.path);

    const newCollection = new Collections({
      image: result.secure_url,
      collectionType: collectionType,
    });

    await newCollection.save();
    res
      .status(201)
      .json({ message: "Collection added successfully", newCollection });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const getAllCollections = async (req, res) => {
  try {
    const collection = await Collections.find({});
    res.status(200).json(collection);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteCollections = async (req, res) => {
  try {
    const { id } = req.params;
    const collections = await Collections.findByIdAndDelete(id);

    if (collections) {
      res.status(200).json({ collections });
    } else {
      res.status(404).json({ message: "Not Found" });
    }

    await cloudinary.uploader.destroy(collections.image.public_id);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
