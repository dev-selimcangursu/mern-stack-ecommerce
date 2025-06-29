import axios from "axios";

export const register = async (registerInfo) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/register",
      registerInfo
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};
