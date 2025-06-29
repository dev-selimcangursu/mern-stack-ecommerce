const express = require("express");
const AuthController = require("../Controller/AuthController");

const router = express.Router();

router.post("/register", AuthController.register);
router.get("/verify-email", AuthController.verifyEmail);

module.exports = router;
