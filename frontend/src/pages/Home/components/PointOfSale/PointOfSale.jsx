import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./PointOfSale.css";

// Satış noktası verisi
const pointOfSaleItems = [
  {
    id: 1,
    title: "MediaMarkt",
    image:
      "https://www.wikywatch.com.tr/wp-content/uploads/2024/01/media-markt.png",
  },
  {
    id: 2,
    title: "Nezih Kitap",
    image: "https://www.wikywatch.com.tr/wp-content/uploads/2024/01/nezih.png",
  },
  {
    id: 3,
    title: "D&R",
    image: "https://www.wikywatch.com.tr/wp-content/uploads/2024/01/dr.png",
  },
  {
    id: 4,
    title: "Amazon Türkiye",
    image: "https://www.wikywatch.com.tr/wp-content/uploads/2024/01/amazon.png",
  },
  {
    id: 5,
    title: "N11",
    image: "https://www.wikywatch.com.tr/wp-content/uploads/2024/01/n11.png",
  },
  {
    id: 6,
    title: "Teknosa",
    image: "https://www.wikywatch.com.tr/wp-content/uploads/2024/01/teknosa.png",
  },
  {
    id: 7,
    title: "Trendyol",
    image: "https://www.wikywatch.com.tr/wp-content/uploads/2024/01/trendyol.png",
  },
];

function PointOfSale() {
  return (
    <section
      className="pos-slider container-fluid"
      aria-label="Satış Noktaları"
    >
      <h2 className="pos-title">Wiky Satış Noktaları</h2>
      <Splide
        options={{
          perPage: 6,
          perMove: 1,
          gap: "1rem",
          arrows: true,
          pagination: false,
          breakpoints: {
            1200: { perPage: 4 },
            992: { perPage: 3 },
            768: { perPage: 2 },
            480: { perPage: 1 },
          },
        }}
      >
        {pointOfSaleItems.map((item) => (
          <SplideSlide key={item.id}>
            <figure className="pos-card">
              <img
                src={item.image}
                alt={`${item.title} Mağaza Logosu`}
                className="pos-card-img"
                loading="lazy"
              />
            </figure>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default PointOfSale;
