import User from "../models/userSchema.js";
import productSchema from "../models/productSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

export const getAllUsers = async (req, res) => {
    try {
      const users = await User.find({})
        .populate("basket.product")
        .populate("wishlist.product")
        .populate("comments.comment")
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error.message);
    }
  };
