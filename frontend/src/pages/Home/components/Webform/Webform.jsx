import React from "react";
import "./Webform.css";

function Webform() {
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
        <form className="webform" action="#" method="POST">
          <input
            type="text"
            name="name"
            placeholder="Adınız Soyadınız"
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="05xx xxx xx xx"
            required
          />
          <input
            type="text"
            name="model"
            placeholder="İlgilendiğiniz Model"
            required
          />
          <button type="submit" className="webform-submit">
            Bilgi Al
          </button>
        </form>
      </div>
    </section>
  );
}

export default Webform;
