const express = require("express");
const router = express.Router();
const WebfromController = require("../Controller/WebformController");

router.post("/add", WebfromController.addWebform);


module.exports = router;
