import bcrypt from "bcrypt";

import User from "../models/User.js";

export const signUp = async (req, res) => {
  try {
    const { userName, email, password, image } = req.body;

    if (!email.includes("@")) {
      throw new Error("Please enter a valid email address");
    }

    if (password.length <= 3) {
      throw new Error("Your password must be at least 4 characters");
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      userName,
      email,
      password: hashedPassword,
      image,
    };

    const user = await User(newUser).save();

    res.status(201).json({ userName: user.userName, email: user.email });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const logIn = async (req, res) => {
  res.send("logIn successfully");
};
