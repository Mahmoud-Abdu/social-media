// import express from "express";
const express = require("express");
// import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
// import { verifyToken } from "../middleware/auth.js";
const {
  getFeedPosts,
  getUserPosts,
  likePost,
} = require("../controllers/posts");
const { verifyToken } = require("../middleware/auth");

const router = express.Router();

// read
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId", verifyToken, getUserPosts);

// update
router.patch("/:id/like", verifyToken, likePost);

module.exports = router;
