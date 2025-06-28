const express = require("express");
const router = express.Router();
const OrderRouter = require("../Controller/OrderController");

router.get("/search", OrderRouter.search);

module.exports = router;
