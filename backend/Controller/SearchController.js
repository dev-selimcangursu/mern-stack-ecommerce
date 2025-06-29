const Product = require("../Model/Product");

exports.searchProducts = async (req, res) => {
  try {
    const { productName } = req.query;

    if (!productName) {
      return res.status(400).json({ message: "Ürün adı gerekli!" });
    }

    const products = await Product.find({
      name: { $regex: productName, $options: "i" },
    });

    res.status(200).json(products);
  } catch (error) {
    console.error("Arama Hatası:", error);
    res.status(500).json({ message: "Sunucu hatası." });
  }
};
