import dotenv from "dotenv";
import bcrypt from "bcrypt";
import cloudinary from "cloudinary";
import jwt from "jsonwebtoken";

import User from "../models/User.js";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_KEY,
  api_secret: process.env.CLOUD_SECRET,
});

export const getUsers = async (req, res) => {
  try {
    const allUser = await User.find({}).sort({ score: -1 }).limit(5);

    const Users = allUser?.map(({ image, userName, score }) => ({
      image,
      userName,
      score,
    }));

    res.status(200).json(Users);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getNumeration = async (req, res) => {
  try {
    const { userName } = req.body;

    const users = await User.find({}).sort({ score: -1 });

    users?.forEach((user, idx) => {
      if (user.userName === userName) {
        res.status(200).json({ userNumeration: idx, score: user?.score });
        return;
      }
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { token } = req.body;

    const verifiedToken = jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(verifiedToken?.id);

    res.status(200).json({
      userName: user?.userName,
      score: user?.score,
      image: user?.image,
      email: user?.email,
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const signUp = async (req, res) => {
  try {
    const { userName, email, password, image } = req.body;

    if (
      userName?.trim().length < 1 ||
      email?.trim().length < 1 ||
      password?.trim().length < 1
    ) {
      throw new Error("All fields are required");
    }

    if (!email?.includes("@")) {
      throw new Error("Please enter a valid email address");
    }

    if (password?.length <= 3) {
      throw new Error("Your password must be at least 4 characters");
    }

    const checkUserInDb = await User.exists({ email });

    if (checkUserInDb) {
      throw new Error("User with this email already exists");
    }

    const salt = await bcrypt.genSalt(Number(process.env.SALT));
    const hashedPassword = await bcrypt.hash(password, salt);

    const imageUrl = await cloudinary.v2.uploader.upload(
      image,
      { public_id: email },
      function (error, result) {
        if (error) {
          return;
        }
        return result;
      }
    );

    const newUser = {
      userName,
      email,
      password: hashedPassword,
      image: imageUrl?.secure_url,
    };

    await new User(newUser).save();

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

    if (!email.includes("@")) {
      throw new Error("Please enter a valid email address");
    }

    const user = await User.findOne({ email });

    const actualPassword = await bcrypt.compare(password, user?.password);

    if (!actualPassword || email !== user.email) {
      throw new Error("Your email or password is incorrect");
    }

    const token = jwt.sign({ id: user?._id }, process.env.JWT_SECRET);

    res.status(200).json({ token: token, isLogin: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
