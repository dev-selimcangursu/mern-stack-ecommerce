import React from "react";
import "./HomeVideoArea.css";

function HomeVideoArea() {
  const handleRedirect = () => {
    window.location.href = "https://www.wikywatch.com";
  };

  return (
    <section
      className="video-container"
      aria-label="Wiky Tanıtım Videosu Alanı"
      itemScope
      itemType="https://schema.org/VideoObject"
      onClick={handleRedirect}
    >
      <meta itemProp="name" content="Wiky Akıllı Saat Tanıtım Videosu" />
      <meta itemProp="description" content="Wiky akıllı saatlerin tanıtım videosunu izleyin." />
      <meta itemProp="uploadDate" content="2024-12-01" />
      <meta itemProp="contentUrl" content="https://www.youtube.com/watch?v=uci1KXfzLTU" />
      <meta itemProp="thumbnailUrl" content="https://img.youtube.com/vi/uci1KXfzLTU/maxresdefault.jpg" />

      <div className="overlay" />
      <iframe
        className="video-iframe"
        src="https://www.youtube.com/embed/uci1KXfzLTU?autoplay=1&mute=1&controls=0&showinfo=0&rel=0&modestbranding=1&loop=1&playlist=uci1KXfzLTU"
        title="Wiky Akıllı Saat Tanıtım Videosu"
        frameBorder="0"
        allow="autoplay; fullscreen"
        allowFullScreen
        itemProp="embedUrl"
      ></iframe>

      <noscript>
        <a href="https://www.youtube.com/watch?v=uci1KXfzLTU" target="_blank" rel="noopener noreferrer">
          Videoyu YouTube üzerinden izlemek için tıklayın.
        </a>
      </noscript>
    </section>
  );
}

export default HomeVideoArea;
