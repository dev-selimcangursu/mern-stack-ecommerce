import React from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { fetchSectionProduct } from "../../../../redux/slices/ProductSlice";
import BannerImageOne from "../../../../assets/banner1.jpeg";
import BannerImageSecond from "../../../../assets/banner2.jpeg";
import "./HomepageBanner.css";
import Banner1Video from "../../../../components/assets/videos/banner-1-video.mp4";
function HomepageBanner() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleBannerClick(slug) {
    dispatch(fetchSectionProduct(slug));
    navigate(`/urun/detay/${slug}`);
  }

  return (
    <section className="homepage__banner container-fluid">
      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0 homepage__video-wrapper">
          <video
            src={Banner1Video}
            autoPlay
            loop
            muted
            playsInline
            className="homepage__video w-100 h-100 object-fit-cover"
          />
        </div>
        <div className="col-md-6">
          <div className="row g-4">
            <div
              className="productCard col-md-6"
              onClick={() =>
                handleBannerClick("wiky-watch-5s-akilli-cocuk-saati-pembe")
              }
            >
              <article className="card card--promo text-bg-dark h-100 shadow-sm">
                <img
                  src={BannerImageOne}
                  className="card-img"
                  alt="wiky-watch-5s"
                />
              </article>
            </div>
            <div
              className="productCard col-md-6"
              onClick={() =>
                handleBannerClick("wiky-watch-5e-akilli-cocuk-saati-mavi")
              }
            >
              <article className="card card--promo text-bg-dark h-100 shadow-sm">
                <img
                  src={BannerImageSecond}
                  className="card-img"
                  alt="wiky-watch-5e"
                />
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomepageBanner;
