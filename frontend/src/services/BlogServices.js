import axios from "axios";

// Anasayfa: Son 8 Blog
export const fetchBlogService = async () => {
  try {
    const response = await axios.get("http://localhost:5000/blog/fetch");
    return response.data; 
  } catch (error) {
    console.error(error);
    throw error;
  }
};
