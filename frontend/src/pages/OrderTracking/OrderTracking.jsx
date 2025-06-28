import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSearchOrder } from "../../redux/slices/OrderSlice";
import "./OrderTracking.css";

function OrderTracking() {
  const [orderNumber, setOrderNumber] = useState("");
  const dispatch = useDispatch();
  const { searchResult, loading, error } = useSelector((state) => state.order);

  const handleInputChange = (e) => {
    setOrderNumber(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!orderNumber.trim()) {
      alert("Lütfen bir sipariş numarası girin.");
      return;
    }
    dispatch(fetchSearchOrder(orderNumber));
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
          <button type="submit" disabled={loading}>
            {loading ? "Sorgulanıyor..." : "Sorgula"}
          </button>
          <p className="form-note">
            Destek için <a href="/iletisim">İletişim</a> sayfamızı ziyaret edebilirsiniz.
          </p>
        </form>

        {error && <p style={{ color: "red", marginTop: "1rem" }}>Hata: {error}</p>}

        {searchResult && searchResult.success && (
          <div className="order-result">
            <h3>📦 Sipariş Bulundu!</h3>

            <div className="order-summary">
              <p><strong>Sipariş Numarası:</strong> {searchResult.data.orderNumber}</p>
              <p><strong>Durum:</strong> {searchResult.data.status}</p>
              <p><strong>Ödeme Durumu:</strong> {searchResult.data.paymentStatus}</p>
              <p><strong>Toplam Tutar:</strong> {searchResult.data.totalAmount} TL</p>
              <p><strong>Ödeme Yöntemi:</strong> {searchResult.data.paymentMethod}</p>
            </div>

            <div className="order-addresses">
              <div className="address-block">
                <h4>🚚 Teslimat Adresi</h4>
                <p>{searchResult.data.shippingAddress.fullName}</p>
                <p>{searchResult.data.shippingAddress.street}</p>
                <p>{searchResult.data.shippingAddress.city} - {searchResult.data.shippingAddress.postalCode}</p>
                <p>{searchResult.data.shippingAddress.country}</p>
                <p>Telefon: {searchResult.data.shippingAddress.phone}</p>
              </div>

              <div className="address-block">
                <h4>🧾 Fatura Adresi</h4>
                <p>{searchResult.data.billingAddress.fullName}</p>
                <p>{searchResult.data.billingAddress.street}</p>
                <p>{searchResult.data.billingAddress.city} - {searchResult.data.billingAddress.postalCode}</p>
                <p>{searchResult.data.billingAddress.country}</p>
                <p>Telefon: {searchResult.data.billingAddress.phone}</p>
              </div>
            </div>

            <div className="order-items">
              <h4>📋 Sipariş Detayları</h4>
              <table>
                <thead>
                  <tr>
                    <th>Ürün</th>
                    <th>SKU</th>
                    <th>Adet</th>
                    <th>Birim Fiyat</th>
                    <th>Toplam</th>
                  </tr>
                </thead>
                <tbody>
                  {searchResult.data.items.map((item, index) => (
                    <tr key={index}>
                      <td>{item.name}</td>
                      <td>{item.sku}</td>
                      <td>{item.quantity}</td>
                      <td>{item.price} TL</td>
                      <td>{item.price * item.quantity} TL</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {searchResult.data.trackingNumber && (
              <p><strong>Kargo Takip Numarası:</strong> {searchResult.data.trackingNumber} ({searchResult.data.shippingProvider})</p>
            )}

            {searchResult.data.notes && (
              <p><strong>Müşteri Notu:</strong> {searchResult.data.notes}</p>
            )}
          </div>
        )}

        {searchResult && !searchResult.success && (
          <p style={{ color: "orange", marginTop: "1rem" }}>{searchResult.message}</p>
        )}
      </div>
    </section>
  );
}

export default OrderTracking;
