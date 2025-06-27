import React from "react";
import { FaUndoAlt, FaShippingFast, FaTruck, FaLock, FaHeadset } from "react-icons/fa";
import "./HomeInfo.css";

const infos = [
  {
    id: 1,
    icon: <FaUndoAlt />,
    title: "Kolay İade",
    description: "Kolay İade İle Alışverişin En Rahat Hali!",
  },
  {
    id: 2,
    icon: <FaShippingFast />,
    title: "Hızlı Gönderi",
    description: "Siparişleriniz en hızlı şekilde kapınıza gelir.",
  },
  {
    id: 3,
    icon: <FaTruck />,
    title: "Ücretsiz Kargo",
    description: "Belirli tutarın üzerindeki siparişlere ücretsiz kargo.",
  },
  {
    id: 4,
    icon: <FaLock />,
    title: "Güvenli Alışveriş",
    description: "Kişisel ve finansal bilgileriniz güvende.",
  },
  {
    id: 5,
    icon: <FaHeadset />,
    title: "Müşteri Hizmetleri",
    description: "7/24 destek, her zaman yanınızdayız.",
  },
];

function HomeInfo() {
  return (
    <section className="home-info" aria-label="Müşteri Hizmetleri ve Avantajlar">
      <div className="info-container">
        {infos.map(({ id, icon, title, description }) => (
          <article key={id} className="info-card">
            <div className="info-icon" aria-hidden="true">{icon}</div>
            <div className="info-text">
              <h3 className="info-title">{title}</h3>
              <p className="info-desc">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default HomeInfo;
