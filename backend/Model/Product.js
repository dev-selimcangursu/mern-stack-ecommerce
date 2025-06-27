const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
  {
    sku: { type: String }, // Stok kodu. Ürünleri benzersiz şekilde tanımlar (ör. barkod)
    name: { type: String }, // Ürün adı
    slug: { type: String }, // URL dostu isim (ör. iphone-15-pro-max). SEO
    description: { type: String }, // Ürün açıklaması
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    }, // Kategori
    price: {
      type: Number,
      required: true,
    }, // Ürün satış fiyatı.
    discount_price: {
      type: Number,
    }, // İndirimli fiyat
    stock_quantity: {
      type: Number,
      default: 0,
    }, // Stok adedi.
    is_active: {
      type: Boolean,
      default: true,
    }, // Ürün yayında mı?
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
