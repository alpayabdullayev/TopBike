import User from "../models/userSchema.js";
import bcrypt from "bcrypt"
import jwt from "jsonwebtoken"

export const register = async (req, res) => {
    try {
      const { username, password, role } = req.body;
      if (!password) {
        return res.status(400).json({ message: 'Password is required' });
      } 
      console.log(req.body);
  
      const userExist = await User.findOne({ username });
  
      if (userExist) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const rounds = 10;
      const hashedPassword = await bcrypt.hash(password, rounds);
  
      const newUser = new User({
        username,
        password: hashedPassword,
        role,
      });
      await newUser.save();
  
      const token = jwt.sign(
        {
          userId: newUser._id,
          username: newUser.username,
          role: role,
        },
        process.env.JWT_SECRETKEY,
        { expiresIn: '1h' }
      );
  
      res.status(201).json({ message: 'User Created', token });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
export const login = async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      console.log(user);
  
      if (!user || !(await bcrypt.compare(password, user.password))) {
        return res.status(401).send("Wrong User");
      }
  
      const token = jwt.sign(
        {
          userId: user._id,
          username: user.username,
          role: user.role,
        },
        process.env.JWT_SECRETKEY,
        { expiresIn: "1h" }
      );
      res.json({ message: "Login successful", token });
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error" });
    }
  };