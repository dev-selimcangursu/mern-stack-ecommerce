import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./BestSellerSlider.css";

const products = [
  {
    id: 1,
    name: "Kablosuz Kulaklık",
    image: "https://cdn2.wikywatch.com.tr/uploads/2025/03/5s-pembe-1.jpg.webp",
    oldPrice: 499,
    newPrice: 349,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Bluetooth Hoparlör",
    image: "https://cdn3.wikywatch.com.tr/uploads/2025/03/5s-mavi-1.jpg.webp",
    oldPrice: 699,
    newPrice: 549,
    rating: 4.2,
  },
  {
    id: 3,
    name: "Akıllı Saat",
    image:
      "https://cdn1.wikywatch.com.tr/uploads/2025/01/wikywatch5e-pembe-1.jpg.webp",
    oldPrice: 1299,
    newPrice: 999,
    rating: 4.8,
  },
  {
    id: 4,
    name: "Taşınabilir Şarj Cihazı",
    image:
      "https://cdn1.wikywatch.com.tr/uploads/2025/01/wikywatch5e-mavi-1.jpg.webp",
    oldPrice: 299,
    newPrice: 199,
    rating: 4.1,
  },
  {
    id: 5,
    name: "Kablosuz Mouse",
    image:
      "https://cdn5.wikywatch.com.tr/uploads/2024/03/WikyWatch4S-1.jpg.webp",
    oldPrice: 149,
    newPrice: 99,
    rating: 4.3,
  },
];

function BestSellerSlider() {
  return (
    <section className="slider-container" aria-label="En Çok Satan Ürünler">
      <h2 className="slider-title">En Çok Satan Modeller</h2>
      <Splide
        options={{
          type: "slide",
          perPage: 4,
          perMove: 1,
          gap: "1rem",
          pagination: false,
          arrows: true,
          breakpoints: {
            1024: { perPage: 3 },
            768: { perPage: 2 },
            480: { perPage: 1 },
          },
        }}
      >
        {products.map((product) => (
          <SplideSlide key={product.id}>
            <article
              className="product-card"
              itemScope
              itemType="https://schema.org/Product"
            >
              <img
                src={product.image}
                alt={`${product.name} görseli`}
                className="product-img"
                itemProp="image"
              />
              <div className="rating" itemProp="aggregateRating" itemScope itemType="https://schema.org/AggregateRating">
                <meta itemProp="ratingValue" content={product.rating.toString()} />
                {"★".repeat(Math.floor(product.rating)) +
                  (product.rating % 1 >= 0.5 ? "½" : "")}
              </div>
              <h3 className="product-name" itemProp="name">
                {product.name}
              </h3>
              <div className="price-section">
                <span className="old-price" aria-hidden="true">
                  {product.oldPrice}₺
                </span>
                <span className="new-price" itemProp="offers" itemScope itemType="https://schema.org/Offer">
                  <meta itemProp="priceCurrency" content="TRY" />
                  <meta itemProp="price" content={product.newPrice.toString()} />
                  {product.newPrice}₺
                </span>
              </div>
            </article>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default BestSellerSlider;
