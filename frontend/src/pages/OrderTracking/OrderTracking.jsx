import React, { useState } from "react";
import "./OrderTracking.css";

function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState("");

  const handleInputChange = (e) => {
    setOrderNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderNumber.trim()) {
      alert("Lütfen bir sipariş numarası girin.");
      return;
    }
    // Burada API çağrısı yapılabilir
    console.log(`Sorgulanan Sipariş Numarası: ${orderNumber}`);
    alert(`Sipariş Numarası: ${orderNumber} sorgulandı!`);
  };

  return (
    <section className="order-tracking container" aria-label="Sipariş Takip">
      <div className="order-tracking-wrapper">
        <div className="order-tracking-info">
          <h1 className="order-tracking-title">Sipariş Durum Sorgulama</h1>
          <p className="order-tracking-subtitle">
            Sipariş numaranız ile anlık olarak sipariş durumunuzu takip edin.
            Sipariş numaranız, satın alma işlemi tamamlandığında SMS veya e-posta
            ile tarafınıza gönderilir.
          </p>
          <ul className="order-tracking-benefits">
            <li>✔ Anlık durum takibi</li>
            <li>✔ Kargo bilgisi ve teslimat süreci</li>
            <li>✔ Sipariş detaylarını görüntüleme</li>
          </ul>
        </div>

        <form className="order-tracking-form" onSubmit={handleSubmit}>
          <h2 className="form-title">Sipariş Numaranızı Girin</h2>
          <input
            type="text"
            placeholder="Örn: #123456"
            value={orderNumber}
            onChange={handleInputChange}
            required
            aria-label="Sipariş Numarası"
          />
          <button type="submit">Sorgula</button>
          <p className="form-note">
            Destek için <a href="/iletisim">İletişim</a> sayfamızı ziyaret edebilirsiniz.
          </p>
        </form>
      </div>
    </section>
  );
}

export default OrderTracking;
