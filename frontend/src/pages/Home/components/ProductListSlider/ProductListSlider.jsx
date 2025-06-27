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
      title: "Wiky Watch 5S Akıllı Çocuk Saati",
      image: Wiky5SImage,
      slug: "wiky-watch-5s-akilli-cocuk-saati-pembe",
    },
    {
      id: 2,
      title: "Wiky Watch 5E Akıllı Çocuk Saati",
      image: Wiky5EImage,
      slug: "wiky-watch-5e-akilli-cocuk-saati-mavi",
    },
    {
      id: 3,
      title: "Wiky Watch 5Plus Akıllı Çocuk Saati",
      image: Wiky5PlusImage,
      slug: "wiky-watch-5plus-akilli-cocuk-saati",
    },
    {
      id: 4,
      title: "Wiky Watch 4S Akıllı Çocuk Saati",
      image: Wiky4SImage,
      slug: "wiky-watch-4s-akilli-cocuk-saati-siyah",
    },
  ];

  return (
    <section className="product-slider container-fluid my-5">
      <h2 className="slider-heading">Tüm Wiky Watch Modellerimiz</h2>
      <Splide
        options={{
          perPage: 4,
          focus: "center",
          gap: "1rem",
          type: "loop",
          autoplay: true,
          pauseOnHover: true,
          pagination: false,
          breakpoints: {
            1200: { perPage: 3 },
            992: { perPage: 2 },
            768: { perPage: 1 },
          },
        }}
        aria-label="Ürün Listesi Slaytı"
      >
        {products.map((product) => (
          <SplideSlide key={product.id}>
            <button
              className="product-card"
              onClick={() => productPageNavigate(product.slug)}
              aria-label={`${product.title} detayına git`}
            >
              <img src={product.image} alt={product.title} loading="lazy" />
              <h3>{product.title}</h3>
            </button>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default ProductListSlider;
