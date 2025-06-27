import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./BlogArea.css";

const blogs = [
  {
    id: 1,
    title: "Çocuklar için Akıllı Saat Rehberi",
    excerpt: "Çocuğunuz için en uygun akıllı saati seçerken nelere dikkat etmelisiniz? Detaylı rehber burada.",
    image: "https://via.placeholder.com/400x250",
    url: "#"
  },
  {
    id: 2,
    title: "Wiky Watch ile Güvenli İletişim",
    excerpt: "Wiky Watch sayesinde çocuğunuzla güvenli iletişim kurmanın yolları.",
    image: "https://via.placeholder.com/400x250",
    url: "#"
  },
  {
    id: 3,
    title: "Ebeveynler İçin Konum Takibi",
    excerpt: "Konum takibi özelliği ile çocuğunuzun her zaman nerede olduğunu bilin.",
    image: "https://via.placeholder.com/400x250",
    url: "#"
  },
  {
    id: 4,
    title: "Akıllı Saatlerde Ebeveyn Kontrolü",
    excerpt: "Wiky Watch ebeveyn kontrolü özellikleri hakkında bilmeniz gerekenler.",
    image: "https://via.placeholder.com/400x250",
    url: "#"
  },
  {
    id: 5,
    title: "Wiky Watch Modelleri Karşılaştırması",
    excerpt: "Farklı Wiky Watch modellerini inceleyin, en doğru tercihi yapın.",
    image: "https://via.placeholder.com/400x250",
    url: "#"
  },
];

function BlogArea() {
  return (
    <section className="blog-area" aria-label="Blog Yazıları">
      <h2 className="blog-title">Son Blog Yazılarımız</h2>
      <Splide
        options={{
          perPage: 4,
          gap: "1rem",
          arrows: true,
          pagination: false,
          breakpoints: {
            1024: { perPage: 2 },
            768: { perPage: 1 },
          },
        }}
        aria-label="Blog Slider"
        className="blog-slider"
      >
        {blogs.map((blog) => (
          <SplideSlide key={blog.id}>
            <article className="blog-card">
              <a href={blog.url} className="blog-link">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="blog-img"
                  loading="lazy"
                />
                <div className="blog-content">
                  <h3 className="blog-card-title">{blog.title}</h3>
                  <p className="blog-excerpt">{blog.excerpt}</p>
                </div>
              </a>
            </article>
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
}

export default BlogArea;
