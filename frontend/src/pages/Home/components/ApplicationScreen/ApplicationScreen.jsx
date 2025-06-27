import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./ApplicationScreen.css";

import AppScreen1 from "../../../../components/assets/screenshot/uygulama-1.webp";
import AppScreen2 from "../../../../components/assets/screenshot/uygulama-11.webp";
import AppScreen3 from "../../../../components/assets/screenshot/uygulama-2.webp";
import AppScreen4 from "../../../../components/assets/screenshot/uygulama-4.webp";
import AppScreen5 from "../../../../components/assets/screenshot/uygulama-9.webp";

function ApplicationScreen() {
  return (
    <section
      className="app-showcase container-fluid"
      aria-label="Uygulamadan Görüntüler"
    >
      <div className="row g-4 align-items-stretch">
        {/* SOL: Video */}
        <div className="col-md-6">
          <div className="app-video-wrapper">
            <video
              className="app-video"
              src="https://media.istockphoto.com/id/1305244841/tr/video/cep-telefonunda-konumunuzu-denetleme.mp4?s=mp4-640x640-is&k=20&c=PJA5L8fOtYXKPRZzxnyzr5SR6dka80QjDPdO9tF6GZI="
              autoPlay
              loop
              muted
              playsInline
              title="Wiky Uygulama Kullanımı"
            />
          </div>
        </div>

        {/* SAĞ: Görsel Slider */}
        <div className="col-md-6">
          <div className="app-slider-wrapper">
            <h2 className="app-slider-title">Uygulamadan Görüntüler</h2>
            <Splide
              options={{
                perPage: 2,
                gap: "1rem",
                arrows: true,
                pagination: false,
                breakpoints: {
                  768: { perPage: 1 },
                },
              }}
              aria-label="Wiky Uygulama Ekran Görüntüleri"
            >
              {[AppScreen1, AppScreen2, AppScreen3, AppScreen4, AppScreen5].map(
                (img, index) => (
                  <SplideSlide key={index}>
                    <figure className="app-slide-card">
                      <img
                        src={img}
                        alt={`Uygulama ekran görüntüsü ${index + 1}`}
                        className="app-slide-img"
                      />
                      <figcaption className="app-slide-caption">
                        Ekran Görüntüsü {index + 1}
                      </figcaption>
                    </figure>
                  </SplideSlide>
                )
              )}
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplicationScreen;
