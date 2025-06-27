import Product from "../Model/Product.js";

// Tüm Ürünler
export const fetch = async (req, res) => {
  try {
    const products = await Product.find();
    // ## Veritabanında Herhangi Bir Ürün Yüklü Değilse
    if (products.length <= 0) {
      res.json({
        success: false,
        message: "Listede Ürün Yok !",
      });
    }
    // ## Veritabanından Ürünler Varsa
    res.json({
      success: true,
      message: "Tüm Ürünler Listelendi",
      data: products,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: `Bilinmeyen Fetch Hatası ${error}`,
    });
  }
};

// Anasayfada İlgili Ürün Bannerından Ürün Detayına Ulaşma
export const productLink = async (req, res) => {
  try {
    const { productSlug } = req.query;

    const product = await Product.find({
      slug: productSlug,
    });
    if (product.length <= 0) {
      res.json({
        success: false,
        message: "Ürün Bulunamadı !",
      });
    }
    res.json({
      success: true,
      message: "Ürün Bulundu",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: `Bilinmeyen Fetch Hatası ${error}`,
    });
  }
};
