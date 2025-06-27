const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    slug: { type: String, unique: true, required: true }, // SEO URL
    summary: { type: String }, // Kısa özet
    content: { type: String, required: true }, // Ana içerik
    coverImage: { type: String }, // Öne çıkan görsel
    tags: [{ type: String }], // Etiketler
    status: {
      type: String,
      enum: ["Aktif", "Pasif"],
      default: "Aktif",
    }, // Yayın durumu
    isFeatured: { type: Boolean, default: false }, // Öne çıkarılsın mı?
    views: { type: Number, default: 0 }, // Görüntülenme sayısı
    likes: { type: Number, default: 0 }, // Beğeni
    metaTitle: { type: String }, // SEO meta title
    metaDescription: { type: String }, // SEO meta description
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", BlogSchema);
