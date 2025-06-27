import React, { useState, useEffect } from "react";
import "./Webform.css";
import { postWebform } from "../../../../redux/slices/WebformSlice";
import { useDispatch, useSelector } from "react-redux";
import Swal from "sweetalert2";

function Webform() {
  const dispatch = useDispatch();
  const webFormResult = useSelector((state) => state.webform.webform);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [product, setProduct] = useState("");

  // Webform Submit Sonucu
  useEffect(() => {
    if (webFormResult && webFormResult.message) {
      Swal.fire({
        icon: webFormResult.success ? "success" : "error",
        title: webFormResult.success ? "Başarılı" : "Hata",
        text: webFormResult.message,
        confirmButtonText: "Tamam",
      });

      if (webFormResult.success) {
        // Başarılıysa formu temizle
        setName("");
        setPhone("");
        setProduct("");
      }
    }
  }, [webFormResult]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handlePhoneChange(e) {
    setPhone(e.target.value);
  }

  function handleProductChange(e) {
    setProduct(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    const formData = { name, phone, product };
    dispatch(postWebform(formData));
  }

  return (
    <section className="webform-hero" aria-label="Bilgi Formu">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="webform-bg-video"
        src="https://media.istockphoto.com/id/1853842130/tr/video/happy-family-children-with-boxes-and-playing-in-new-home-with-smile-mom-and-dad-in-living.mp4?s=mp4-640x640-is&k=20&c=M3Om27d_9KN66nxOLFuXzgp1LzlWh0nlP9u5MyEGI7s="
        title="Aile Mutlu Video Arka Plan"
      />

      <div className="webform-overlay"></div>

      <div className="webform-content container">
        <h1 className="webform-title">Wiky Watch Bilgi Formu</h1>
        <p className="webform-subtitle">
          Formu doldurun, en kısa sürede sizi arayalım!
        </p>
        <form className="webform" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleNameChange}
            placeholder="Adınız Soyadınız"
            required
          />
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            placeholder="05xx xxx xx xx"
            required
          />
          <select
            name="model"
            value={product}
            onChange={handleProductChange}
            required
          >
            <option value="">İlgilendiğiniz Modeli Seçin</option>
            <option value="685e975f710164c7294f2040">
              Wiky Watch 5S Pembe
            </option>
            <option value="685e97d07f69cebf404a1f17">Wiky Watch 5E Mavi</option>
            <option value="685e98297f69cebf404a1f18">
              Wiky Watch 4S Siyah
            </option>
            <option value="685e98727f69cebf404a1f19">
              Wiky Watch 5 Plus Pembe
            </option>
          </select>
          <button type="submit" className="webform-submit">
            Bilgi Al
          </button>
        </form>
      </div>
    </section>
  );
}

export default Webform;
