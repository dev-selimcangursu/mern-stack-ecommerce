import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./ApplicationScreen.css";
import GpsBanner from "../../../../components/assets/videos/gps-banner.mp4";
import AppScreen1 from "../../../../components/assets/screenshot/screenshot-1.webp";
import AppScreen2 from "../../../../components/assets/screenshot/screenshot-2.webp";
import AppScreen3 from "../../../../components/assets/screenshot/screenshot-3.webp";
import AppScreen4 from "../../../../components/assets/screenshot/screenshot-4.webp";
import AppScreen5 from "../../../../components/assets/screenshot/screenshot-5.webp";
import AppScreen6 from "../../../../components/assets/screenshot/screenshot-6.webp";
import AppScreen7 from "../../../../components/assets/screenshot/screenshot-7.webp";
import AppScreen8 from "../../../../components/assets/screenshot/screenshot-8.webp";
import AppScreen9 from "../../../../components/assets/screenshot/screenshot-9.webp";
import AppScreen10 from "../../../../components/assets/screenshot/screenshot-10.webp";
import AppScreen11 from "../../../../components/assets/screenshot/screenshot-11.webp";
import AppScreen12 from "../../../../components/assets/screenshot/screenshot-12.webp";

const screenshots = [
  AppScreen1,
  AppScreen2,
  AppScreen3,
  AppScreen4,
  AppScreen5,
  AppScreen6,
  AppScreen7,
  AppScreen8,
  AppScreen9,
  AppScreen10,
  AppScreen11,
  AppScreen12,
];

function ApplicationScreen() {
  return (
    <section
      className="app-showcase container-fluid"
      aria-label="Wiky Uygulama Ekranları"
      itemScope
      itemType="https://schema.org/ImageGallery"
    >
      <div className="row g-4 align-items-stretch">
        <div className="col-md-6">
          <div
            className="app-video-wrapper"
            itemScope
            itemType="https://schema.org/VideoObject"
          >
            <meta itemProp="name" content="Wiky Akıllı Saat Uygulama Videosu" />
            <meta
              itemProp="description"
              content="Wiky uygulamasıyla neler yapabileceğinizi izleyin."
            />
            <meta itemProp="uploadDate" content="2024-12-01" />
            <meta
              itemProp="contentUrl"
              content="https://media.istockphoto.com/id/1305244841/tr/video/cep-telefonunda-konumunuzu-denetleme.mp4"
            />

            <video
              className="app-video"
              src={GpsBanner}
              autoPlay
              loop
              muted
              playsInline
              title="Wiky Uygulama Kullanımı"
              itemProp="contentUrl"
              aria-label="Wiky uygulama tanıtım videosu"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="app-slider-wrapper">
            <h2 className="app-slider-title">
              Wiky Uygulama Ekran Görüntüleri
            </h2>
            <Splide
              options={{
                perPage: 2,
                gap: "1rem",
                arrows: true,
                pagination: true,
                breakpoints: {
                  768: { perPage: 1 },
                },
              }}
              aria-label="Wiky Uygulama Ekran Galerisi"
            >
              {screenshots.map((img, index) => (
                <SplideSlide
                  key={index}
                  itemScope
                  itemType="https://schema.org/ImageObject"
                >
                  <figure className="app-slide-card">
                    <img
                      src={img}
                      alt={`Wiky Uygulama Ekran Görüntüsü ${index + 1}`}
                      className="app-slide-img"
                      loading="lazy"
                      itemProp="contentUrl"
                    />
                    <meta
                      itemProp="name"
                      content={`Wiky Screenshot ${index + 1}`}
                    />
                    <figcaption
                      className="app-slide-caption"
                      itemProp="caption"
                    >
                      Ekran Görüntüsü {index + 1}
                    </figcaption>
                  </figure>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ApplicationScreen;
