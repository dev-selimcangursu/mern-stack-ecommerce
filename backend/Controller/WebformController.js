import Webform from "../Model/Webform.js";

export const addWebform = async (req, res) => {
  try {
    // Kullanıcının Ip Adresini Alır
    const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;

    const { name, phone, product } = req.body;

    const newWebForm = new Webform({
      name: name,
      phone: phone,
      product: product,
      ip: ip,
    });
    await newWebForm.save();

    res.json({
      success: true,
      message: "Webform Başarıyla Oluşturuldu!",
    });
  } catch (error) {
    console.log(error);
    res.json({
      success: false,
      message: `Webfrom Oluşturulamadı ${error}`,
    });
  }
};
