import axios from "axios";

export const searchOrderService = async (orderNumber) => {
  try {
    const response = await axios.get(
      "http://localhost:5000/order/search",
      {
        params: { orderNumber: orderNumber },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
