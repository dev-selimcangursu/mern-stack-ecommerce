import React from "react";
import BannerImageOne from "../../../../assets/banner1.jpeg";
import BannerImageSecond from "../../../../assets/banner2.jpeg";
import './HomepageBanner.css'

function HomepageBanner() {
  return (
    <section className="homepage__banner container-fluid">
      <div className="row">
        <div className="col-md-6 mb-4 mb-md-0 homepage__video-wrapper">
          <video
            src="https://media.istockphoto.com/id/1265149260/tr/video/parkta-ak%C4%B1ll%C4%B1-saat-kullanan-%C3%A7ocuk-%C3%A7ocuk-ak%C4%B1ll%C4%B1-telefon-vdeo-arama-konu%C5%9Fuyor-internette.mp4?s=mp4-640x640-is&k=20&c=4CD3OXN_vr0VMxYNehyzb5Et5Ielg7RXcxkGCHm3kGo="
            autoPlay
            loop
            muted
            playsInline
            className="homepage__video w-100 h-100 object-fit-cover"
          />
        </div>
        <div className="col-md-6">
          <div className="row g-4">
            <div className="col-md-6">
              <article className="card card--promo text-bg-dark h-100 shadow-sm">
                <img
                  src={BannerImageOne}
                  className="card-img"
                  alt="wiky-watch-5s"
                />
              </article>
            </div>
            <div className="col-md-6">
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
