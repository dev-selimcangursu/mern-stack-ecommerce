import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./ProductListSlider.css";
import Wiky4SImage from "../../../../components/assets/products/banner-4s.jpeg";
import Wiky5EImage from "../../../../components/assets/products/banner-5e.jpeg";
import Wiky5PlusImage from "../../../../components/assets/products/banner-5plus.jpeg";
import Wiky5SImage from "../../../../components/assets/products/banner-5s.jpeg";
import { useDispatch } from "react-redux";
import { fetchSectionProduct } from "../../../../redux/slices/ProductSlice";
import { useNavigate } from "react-router-dom";

function ProductListSlider() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function productPageNavigate(slug) {
    dispatch(fetchSectionProduct(slug));
    navigate(`/urun/detay/${slug}`);
  }
  const products = [
    {
      id: 1,
      title: "Wiky Watch 5S",
      image: Wiky5SImage,
      slug: "wiky-watch-5s-akilli-cocuk-saati",
    },
    {
      id: 2,
      title: "Wiky Watch 5E",
      image: Wiky5EImage,
      slug: "wiky-watch-5e-akilli-cocuk-saati",
    },
    {
      id: 3,
      title: "Wiky Watch 5Plus",
      image: Wiky5PlusImage,
      slug: "wiky-watch-5plus-akilli-cocuk-saati",
    },
    {
      id: 4,
      title: "Wiky Watch 4S",
      image: Wiky4SImage,
      slug: "wiky-watch-4s-akilli-cocuk-saati",
    },
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
            <div
              className="product-card"
              onClick={() => productPageNavigate(product.slug)}
            >
              <img src={product.image} alt={product.title} />
            </div>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default ProductListSlider;
