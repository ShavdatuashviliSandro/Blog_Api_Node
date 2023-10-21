const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.post("/", async (req, res) => {
    const { title, description, category } = req.body;
    const post = new Post({ title, description, category });
    await post.save();
    res.status(201).json(post);
});

module.exports = router;