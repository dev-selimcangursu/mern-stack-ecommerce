const express = require("express");
const router = express.Router();
const BlogController = require("../Controller/BlogController");

router.get("/fetch", BlogController.fetch);

module.exports = router;
