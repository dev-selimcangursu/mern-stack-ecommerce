import axios from "axios";

export const searchService = async (productName) => {
  try {
    const response = await axios.get("http://localhost:5000/search/fetch", {
      params: { productName: productName },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
