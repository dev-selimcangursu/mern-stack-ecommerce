import Order from "../Model/Order.js";

export const search = async (req, res) => {
  try {
    const { orderNumber } = req.query;

    const order = await Order.findOne({
      orderNumber: orderNumber,
    });

    if (!order) {
      return res.json({
        success: false,
        message: "Sipariş Bulunamadı!",
      });
    }

    return res.json({
      success: true,
      message: "Sipariş Bulundu",
      data: order,
    });

  } catch (error) {
    console.error(error);
    return res.json({
      success: false,
      message: `Sunucu Hatası: ${error.message}`,
    });
  }
};
