import User from "../models/userSchema.js";
import productSchema from "../models/productSchema.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import commmentSchema from "../models/commmentSchema.js";

export const getAllUsers = async (req, res) => {
  try {
    const users = await User.find({})
      .populate("basket.product")
      .populate("wishlist.product")
      .populate("comments.comment");
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await User.findById(id)
      .populate("basket.product")
      .populate("wishlist.product")
      .populate("comments.comment");
    if (!user) {
      return res.status(404).json({ message: "Not Found" });
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const { username, password, role } = req.body;

    const rounds = 10;
    const hashedPassword = await bcrypt.hash(password, rounds);

    const newUser = new User({
      username,
      password: hashedPassword,
      role: role,
    });

    await newUser.save();
    res.status(200).json({ message: "Created User", newUser });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteUser = await User.findByIdAndDelete(id);

    if (deleteUser) {
      res.status(200).json({ deleteUser });
    } else {
      res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { username, password, role, age, avatar } = req.body;

    const isOwnProfile = res.user.userId === id;

    if (!isOwnProfile && res.user.role !== 'admin' && res.user.role !== 'superAdmin') {
      return res.status(403).json({ message: 'error' });
    }

    const updateUser = await User.findById(id);

    if (updateUser) {
      if (isOwnProfile) {
        updateUser.username = username;
        const round = 10;
        const hashedPassword = await bcrypt.hash(password, round);
        updateUser.password = hashedPassword;
        updateUser.avatar = avatar;
        updateUser.age = age;
      }

      if (res.user.role === 'admin' || res.user.role === 'superAdmin') {
        updateUser.role = role;
      }

      await updateUser.save();
      res.status(200).json({ updateUser });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};