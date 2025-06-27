import Blog from '../Model/Blog.js'

// Anasayfada Son 8 Blog Göster
export const fetch = async (req, res) => {
  try {
    const blogs = await Blog.find({ status: "Aktif" })
      .sort({ createdAt: -1 })
      .limit(8);
    res.json({
      success: true,
      data: blogs,
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: `Bilinmeyen Fetch Hatası: ${error}`,
    });
  }
};
