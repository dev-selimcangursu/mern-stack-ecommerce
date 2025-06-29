const express = require("express");
const router = express.Router();
const SearchController = require("../Controller/SearchController");

router.get("/fetch", SearchController.searchProducts);

module.exports = router;
