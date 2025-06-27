import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "./BlogArea.css";
import { fetchTop8Blog } from "../../../../redux/slices/BlogSlice";

function BlogArea() {
  const dispatch = useDispatch();
  const { top8Blog, status } = useSelector((state) => state.blog);

  useEffect(() => {
    dispatch(fetchTop8Blog());
  }, [dispatch]);

  return (
    <section className="blog-area" aria-label="Blog Yazıları">
      <h2 className="blog-title">Son Blog Yazılarımız</h2>

      {status === "loading" && <p>Yükleniyor...</p>}
      {status === "failed" && <p>Bir hata oluştu.</p>}

      {status === "succeeded" && (
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
          {top8Blog.map((blog) => (
            <SplideSlide key={blog._id}>
              <article className="blog-card">
                <a href={`/blog/${blog.slug}`} className="blog-link">
                  <img
                    src={blog.coverImage}
                    alt={blog.title}
                    className="blog-img"
                    loading="lazy"
                  />
                  <div className="blog-content">
                    <h3 className="blog-card-title">{blog.title}</h3>
                    <p className="blog-excerpt">{blog.summary}</p>
                  </div>
                </a>
              </article>
            </SplideSlide>
          ))}
        </Splide>
      )}
    </section>
  );
}

export default BlogArea;
