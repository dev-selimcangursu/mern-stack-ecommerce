const express = require("express");
const router = express.Router();
const ProductController = require("../Controller/ProductController");

router.get("/fetch", ProductController.fetch);

module.exports = router;
