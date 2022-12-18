import bcrypt from "bcrypt";

import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const allUsers = await User.find({});

    res.status(200).json(allUsers);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const signUp = async (req, res) => {
  try {
    const { userName, email, password, image } = req.body;

    if (!userName || !email || !password) {
      throw new Error("All fields are required");
    }

    if (!email.includes("@")) {
      throw new Error("Please enter a valid email address");
    }

    if (password.length <= 3) {
      throw new Error("Your password must be at least 4 characters");
    }

    const checkUserInDb = await User.exists({ email });

    if (checkUserInDb) {
      throw new Error("User with this email already exists");
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      userName,
      email,
      password: hashedPassword,
      image,
    };

    await User(newUser).save();

    res.status(201).json({ text: "User created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const logIn = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new Error("All fields are required");
    }

    const user = await User.findOne({ email });

    if (!email.includes("@")) {
      throw new Error("Please enter a valid email address");
    }

    const actualPassword = await bcrypt.compare(password, user?.password);

    if (!actualPassword || email !== user.email) {
      throw new Error("Your email or password is incorrect");
    }

    res.status(200).json({
      userName: user.userName,
      email: user.email,
      image: user.image ? user.image : null,
      score: user.score,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
