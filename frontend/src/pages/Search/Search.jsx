import React from "react";
import { useSelector } from "react-redux";
import { useLocation, Link } from "react-router-dom";
import "./Search.css";

function Search() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("q");

  const { search } = useSelector((state) => state.search);

  return (
    <div className="container py-5">
      <h1>Arama Sonuçları</h1>
      <p>
        Aranan kelime: <strong>{searchQuery}</strong>
      </p>

      {search && search.length > 0 ? (
        <div className="row">
          {search.map((product) => (
            <div className="col-md-3 mb-4" key={product._id}>
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
            </div>
          ))}
        </div>
      ) : (
        <p>Sonuç bulunamadı.</p>
      )}
    </div>
  );
}

export default Search;
