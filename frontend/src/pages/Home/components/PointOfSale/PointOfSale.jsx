import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./PointOfSale.css";

import AmazonLogo from '../../../../components/assets/store-list/amazon.webp';
import BeymenLogo from '../../../../components/assets/store-list/beymen.webp';
import DrLogo from '../../../../components/assets/store-list/dr.png';
import HepsiburadaLogo from '../../../../components/assets/store-list/hepsiburada.png';
import MediaMarktLogo from '../../../../components/assets/store-list/media-markt.png';
import N11Logo from '../../../../components/assets/store-list/n11.webp';
import NezihLogo from '../../../../components/assets/store-list/nezih.png';
import TeknosaLogo from '../../../../components/assets/store-list/teknosa.png';
import TrendyolLogo from '../../../../components/assets/store-list/trendyol.png';
import TurkcellLogo from '../../../../components/assets/store-list/turkcell.png';
import VodofoneLogo from '../../../../components/assets/store-list/vodafone-logo.webp';

// Satış noktası verisi (tüm logo importlarını kullandım)
const pointOfSaleItems = [
  {
    id: 1,
    title: "Amazon",
    image: AmazonLogo,
  },
  {
    id: 2,
    title: "Beymen",
    image: BeymenLogo,
  },
  {
    id: 3,
    title: "D&R",
    image: DrLogo,
  },
  {
    id: 4,
    title: "Hepsiburada",
    image: HepsiburadaLogo,
  },
  {
    id: 5,
    title: "MediaMarkt",
    image: MediaMarktLogo,
  },
  {
    id: 6,
    title: "N11",
    image: N11Logo,
  },
  {
    id: 7,
    title: "Nezih",
    image: NezihLogo,
  },
  {
    id: 8,
    title: "Teknosa",
    image: TeknosaLogo,
  },
  {
    id: 9,
    title: "Trendyol",
    image: TrendyolLogo,
  },
  {
    id: 10,
    title: "Turkcell",
    image: TurkcellLogo,
  },
  {
    id: 11,
    title: "Vodafone",
    image: VodofoneLogo,
  },
];

function PointOfSale() {
  return (
    <section className="pos-slider container-fluid" aria-label="Satış Noktaları">
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
