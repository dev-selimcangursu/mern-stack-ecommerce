import User from "../Model/User.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import crypto from "crypto";

export const register = async (req, res) => {
  try {
    const { fullname, email, phone, password } = req.body;

    // Email kontrolü
    const existingEmail = await User.findOne({ email });
    if (existingEmail) {
      return res
        .status(400)
        .json({ success: false, message: "Bu e-posta zaten kayıtlı." });
    }

    // Telefon kontrolü
    const existingPhone = await User.findOne({ phone });
    if (existingPhone) {
      return res
        .status(400)
        .json({
          success: false,
          message: "Bu telefon numarası zaten kayıtlı.",
        });
    }

    // Şifre hashle
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    // Doğrulama tokeni üret
    const emailVerificationToken = crypto.randomBytes(32).toString("hex");

    // Yeni kullanıcı oluştur
    const newUser = await User.create({
      fullName: fullname,
      email,
      phone,
      passwordHash,
      emailVerificationToken,
    });

    // Mail gönder
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: "dev.gursuselimcan@gmail.com",
        pass: "xegc hege mxxh zigk",
      },
    });

    const verifyUrl = `http://localhost:5000/auth/verify-email?token=${emailVerificationToken}`;

    const mailOptions = {
      from: "dev.gursuselimcan@gmail.com",
      to: newUser.email,
      subject: "E-posta Doğrulama",
      html: `
        <h1>Hesabınızı Doğrulayın</h1>
        <p>Lütfen aşağıdaki linke tıklayarak hesabınızı doğrulayın:</p>
        <a href="${verifyUrl}">Hesabı Doğrula</a>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(201).json({
      success: true,
      message:
        "Kayıt başarılı! Lütfen e-postanızı kontrol ederek hesabınızı doğrulayın.",
    });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: `Bir hata oluştu: ${error}` });
  }
};

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;

    const user = await User.findOne({ emailVerificationToken: token });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Geçersiz veya süresi dolmuş doğrulama linki.",
      });
    }

    if (user.isEmailVerified) {
      return res.json({ success: true, message: "Hesap zaten doğrulanmış." });
    }

    user.isEmailVerified = true;
    user.emailVerifiedAt = new Date();
    user.emailVerificationToken = undefined;
    await user.save();

    res.json({ success: true, message: "Hesap başarıyla doğrulandı." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ success: false, message: `Bir hata oluştu: ${error}` });
  }
};
