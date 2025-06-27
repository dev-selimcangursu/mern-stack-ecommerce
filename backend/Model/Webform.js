const mongoose = require("mongoose");

const WebformSchema = new mongoose.Schema(
  {
    name: String,
    phone: String,
    product: String,
    ip: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Webform", WebformSchema);
