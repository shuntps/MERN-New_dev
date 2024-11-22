import bcryptjs from "bcryptjs";

import User from "../models/userModel.js";

import { generateTokenAndSetCookies } from "../utils/generateTokenAndSetCookies.js";

export const signup = async (req, res) => {
   const { email, password, name } = req.body;

   try {
      if (!email || !password || !name) {
         throw new Error("All fields are required");
      }

      const existingUser = await User.findOne({ email });
      if (existingUser) {
         throw new Error("User already exists");
      }

      const hashedPassword = await bcryptjs.hash(password, 10);

      const verificationToken = Math.floor(
         100000 + Math.random() * 900000
      ).toString();

      const user = new User({
         email,
         password: hashedPassword,
         name,
         verificationToken,
         verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
      });

      await user.save();

      generateTokenAndSetCookies(res, user._id);

      res.status(201).json({
         success: true,
         message: "User created successfully",
         // user: { ...user._doc, password: undefined },
         user: {
            name,
            email,
         },
      });
   } catch (error) {
      res.status(400).json({ success: false, message: error.message });
   }
};

export const login = async (req, res) => {
   res.send("login route");
};

export const logout = async (req, res) => {
   res.send("Logout route");
};
