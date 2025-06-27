import React, { useEffect } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./BestSellerSlider.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchIsPopularProducts } from "../../../../redux/slices/ProductSlice";
import { Link } from "react-router-dom";

function BestSellerSlider() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.isPopularProduct);

  useEffect(() => {
    dispatch(fetchIsPopularProducts());
  }, [dispatch]);

  return (
    <section
      className="slider-container container-fluid"
      aria-label="En Çok Satan Ürünler"
    >
      <h2 className="slider-title">En Çok Satan Modeller</h2>
      <Splide
        options={{
          type: "loop",
          perPage: 4,
          perMove: 1,
          gap: "1.5rem",
          pagination: false,
          arrows: true,
          autoplay: true,
          pauseOnHover: true,
          breakpoints: {
            1280: { perPage: 3 },
            1024: { perPage: 2 },
            768: { perPage: 1 },
          },
        }}
      >
        {Array.isArray(products) &&
          products.map((product) => (
            <SplideSlide key={product._id}>
              <article
                className="product-card"
                itemScope
                itemType="https://schema.org/Product"
              >
                <Link
                  to={`/urun/detay/${product.slug}`}
                  className="product-link"
                  itemProp="url"
                >
                  <img
                    src={product.image_url}
                    alt={product.name}
                    className="product-img"
                    itemProp="image"
                    loading="lazy"
                  />
                  <div
                    className="rating"
                    itemProp="aggregateRating"
                    itemScope
                    itemType="https://schema.org/AggregateRating"
                  >
                    <meta itemProp="ratingValue" content="5" />
                    <meta itemProp="reviewCount" content="137" />
                    ★★★★★
                  </div>
                  <h3 className="product-name" itemProp="name">
                    {product.name}
                  </h3>
                  <div
                    className="price-section"
                    itemProp="offers"
                    itemScope
                    itemType="https://schema.org/Offer"
                  >
                    <meta itemProp="priceCurrency" content="TRY" />
                    <meta
                      itemProp="price"
                      content={product.discount_price || product.price}
                    />
                    <span className="old-price">{product.price}₺</span>

                    <span className="new-price">
                      {product.discount_price || product.price}₺
                    </span>
                  </div>
                </Link>
              </article>
            </SplideSlide>
          ))}
      </Splide>
    </section>
  );
}

export default BestSellerSlider;
