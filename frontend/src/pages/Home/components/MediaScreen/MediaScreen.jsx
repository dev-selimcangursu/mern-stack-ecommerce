import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./MediaScreen.css";

// Örnek video verisi
const userVideos = [
  {
    id: 1,
    title: "Wiky Watch Kullanıcı Videosu 1",
    url: "https://www.youtube.com/embed/uci1KXfzLTU",
  },
  {
    id: 2,
    title: "Wiky Watch Kullanıcı Videosu 2",
    url: "https://www.youtube.com/embed/uci1KXfzLTU",
  },
  {
    id: 3,
    title: "Wiky Watch Kullanıcı Videosu 3",
    url: "https://www.youtube.com/embed/uci1KXfzLTU",
  },
  {
    id: 4,
    title: "Wiky Watch Kullanıcı Videosu 4",
    url: "https://www.youtube.com/embed/uci1KXfzLTU",
  },
  {
    id: 5,
    title: "Wiky Watch Kullanıcı Videosu 5",
    url: "https://www.youtube.com/embed/uci1KXfzLTU",
  },
];

function MediaScreen() {
  return (
    <section
      className="media-screen container-fluid"
      aria-label="Wiky Watch Kullanıcı Videoları"
    >
      <h2 className="media-title">Wiky Watch Kullanıcı Videoları</h2>
      <Splide
        options={{
          perPage: 4,
          gap: "1rem",
          arrows: true,
          pagination: false,
          breakpoints: {
            1200: { perPage: 3 },
            768: { perPage: 2 },
            480: { perPage: 1 },
          },
        }}
        aria-label="Wiky Watch Videoları"
      >
        {userVideos.map((video) => (
          <SplideSlide key={video.id}>
            <figure className="video-card">
              <div className="video-wrapper">
                <iframe
                  src={video.url}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </figure>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default MediaScreen;
