import React, { useState } from "react";
import "./Register.css";
import Banner from "../../../assets/banner1.jpeg";
import { useDispatch } from "react-redux";
import { registerPost } from "../../../redux/slices/AuthSlice";
import Swal from "sweetalert2";

const Register = () => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(registerPost(formData)).unwrap();
      Swal.fire({
        icon: "success",
        title: "Başarılı",
        text: "Kayıt başarılı!",
        confirmButtonText: "Tamam",
      });
    } catch (err) {
      console.error("Kayıt hatası:", err);
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Kayıt başarısız, lütfen tekrar deneyin.",
        confirmButtonText: "Tamam",
      });
    }
  };

  return (
    <div className="container">
      <div className="leftSide">
        <img src={Banner} alt="Register" />
      </div>
      <div className="rightSide">
        <h2 className="title">Kayıt Ol | Son Tekliflerden Haberdar Ol !</h2>
        <form className="form" onSubmit={handleSubmit}>
          <label className="label">
            İsim Soyisim
            <input
              type="text"
              name="fullname"
              className="input"
              placeholder="İsminizi girin"
              value={formData.fullname}
              onChange={handleChange}
              required
            />
          </label>

          <label className="label">
            Telefon
            <input
              type="tel"
              name="phone"
              className="input"
              placeholder="Telefon numaranızı girin"
              pattern="[0-9]{10,15}"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </label>

          <label className="label">
            E-posta
            <input
              type="email"
              name="email"
              className="input"
              placeholder="E-posta adresinizi girin"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label className="label">
            Parola
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Parolanızı girin"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </label>

          <p className="infoText">
            Kişisel verileriniz, bu web sitesindeki deneyiminizi desteklemek,
            hesabınıza erişimi yönetmek ve gizlilik ilkesi sayfamızda açıklanan
            diğer amaçlar için kullanılacaktır.
          </p>
          <button type="submit" className="button">
            Kayıt Ol
          </button>
          <p className="haveAccountText">Hesabınız var mı?</p>
          <button type="button" className="loginButton">
            Giriş Yap
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
