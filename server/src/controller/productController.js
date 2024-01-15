import Product from "../models/productSchema";

export const createProduct = async (req, res) => {
  try {
    const {
      name,
      description,
      mainImage,
      images,
      price,
      size,
      discount,
      isOnSale,
      categories,
      colors,
      tags,
      isNewBu,
      stock,
      isActive,
    } = req.body;

    const newProduct = new TopBikeProduct({
      name,
      description,
      mainImage,
      images,
      price,
      size,
      discount,
      isOnSale,
      categories,
      colors,
      tags,
      isNewBu,
      stock,
      isActive,
    });

    const savedProduct = await newProduct.save();

    res.status(201).json({ product: savedProduct });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};
