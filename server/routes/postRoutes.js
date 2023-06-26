import express from "express";
import * as dotenv from "dotenv"; //allowed to use env variables
import { v2 as cloudinary } from "cloudinary";

import Post from "../mongodb/models/post.js";

dotenv.config(); //env variables getting populated

const router = express.Router();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//GET route to get all posts

router.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json({ succes: true, data: posts });
  } catch (err) {
    res.status(500).json({ succes: false, message: err });
  }
});

router.route("/").post(async (req, res) => {
  try {
    const { name, prompt, photo } = req.body;
    const photoUrl = await cloudinary.uploader.upload(photo);

    const newPost = await Post.create({
      name,
      prompt,
      photo: photoUrl.url, //the instance in the database only has a URL
    });

    res.status(201).json({ succes: true, data: newPost });
  } catch (err) {
    res.status(500).json({ succes: false, message: err });
  }
});

//Create a post route

export default router;
