// import express from "express";
const express = require("express");
// import {
//   getUser,
//   getUserFriends,
//   addRemoveFriend,
// } from "../controllers/users.js";
const {getUser, getUserFriends, addRemoveFriend} = require("../controllers/users")
const {verifyToken} = require("../middleware/auth")
// import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

// read
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

// update

router.patch("/:id/:friendId", verifyToken, addRemoveFriend);

module.exports = router;
