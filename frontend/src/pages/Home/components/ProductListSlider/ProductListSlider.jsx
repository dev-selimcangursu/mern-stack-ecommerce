import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./ProductListSlider.css";
import Wiky4SImage from "../../../../components/assets/products/banner-4s.jpeg";
import Wiky5EImage from "../../../../components/assets/products/banner-5e.jpeg";
import Wiky5PlusImage from "../../../../components/assets/products/banner-5plus.jpeg";
import Wiky5SImage from "../../../../components/assets/products/banner-5s.jpeg";

function ProductListSlider() {
  const products = [
    { id: 1, title: "Wiky Watch 5S", image: Wiky5SImage },
    { id: 2, title: "Wiky Watch 4", image: Wiky5EImage },
    { id: 3, title: "Wiky Watch Aksesuar", image: Wiky5PlusImage },
    { id: 4, title: "Wiky Watch 3", image: Wiky4SImage },
  ];

  return (
    <section className="product-slider container-fluid my-5">
      <Splide
        options={{
          perPage: 3,
          focus: "center",
          gap: "1rem",
          type: "loop",
          autoplay: true,
          pauseOnHover: true,
          pagination: false,
        }}
      >
        {products.map((product) => (
          <SplideSlide key={product.id}>
            <div className="product-card">
              <img src={product.image} alt={product.title} />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default ProductListSlider;
