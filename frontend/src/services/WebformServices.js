import axios from "axios";

export const postWebformService = async (webform) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/webform/add",
      webform
    );
    return response.data
  } catch (error) {
    console.log(error);
    throw error;
  }
};
