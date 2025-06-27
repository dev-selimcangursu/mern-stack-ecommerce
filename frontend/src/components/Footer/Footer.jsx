import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer" aria-label="Site Footer">
      <div className="footer-container">
        <div className="footer-section footer-brand">
          <h2 className="footer-logo" tabIndex="0">
            Burada Logo Olacak
          </h2>
          <p className="footer-description" tabIndex="0">
            Çocuklarınız için güvenilir ve eğlenceli akıllı saat çözümleri.
            Ailelerin tercihi, en iyi teknoloji ile birleşiyor.
          </p>
          <div className="footer-support">
            <div className="support-item" tabIndex="0">
              <FaPhoneAlt className="support-icon" aria-hidden="true" />
              <span>Satış Hattı: </span>
              <a href="tel:+902163489393">+90 216 348 9393</a>
            </div>
            <div className="support-item" tabIndex="0">
              <FaWhatsapp className="support-icon" aria-hidden="true" />
              <span>Satış WhatsApp Hattı: </span>
              <a
                href="https://wa.me/905301234567"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                <a
                  href="https://wa.me/905423544720"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  +90 542 354 4720
                </a>
              </a>
            </div>
            <div className="support-item" tabIndex="0">
              <FaPhoneAlt className="support-icon" aria-hidden="true" />
              <span>Teknik Destek Hattı: </span>
              <a href="tel:+902163459360">+90 216 345 9360</a>
            </div>
            <div className="support-item" tabIndex="0">
              <FaWhatsapp className="support-icon" aria-hidden="true" />
              <span>Teknik Destek WhatsApp Hattı: </span>
              <a
                href="https://wa.me/905527157486"
                target="_blank"
                rel="noopener noreferrer"
              >
                +90 552 715 74 86
              </a>
            </div>
          </div>
          <div className="footer-social" aria-label="Sosyal Medya">
            <a
              href="https://www.facebook.com/wikywatch"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://twitter.com/wikywatch"
              aria-label="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
            <a
              href="https://www.instagram.com/wikywatch"
              aria-label="Instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.youtube.com/wikywatch"
              aria-label="YouTube"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube />
            </a>
          </div>
        </div>
        <nav
          className="footer-section footer-links"
          aria-label="Popüler Kategoriler"
        >
          <h3 tabIndex="0">Popüler Kategoriler</h3>
          <ul>
            <li>
              <a href="/about" tabIndex="0">
                Tüm Wiky Watch Ürünleri
              </a>
            </li>
            <li>
              <a href="/products" tabIndex="0">
                Çok Satanlar
              </a>
            </li>
            <li>
              <a href="/blog" tabIndex="0">
                Wiky Aksesuar
              </a>
            </li>
            <li>
              <a href="/contact" tabIndex="0">
                İletişim
              </a>
            </li>
            <li>
              <a href="/faq" tabIndex="0">
                Sıkça Sorulan Sorular
              </a>
            </li>
          </ul>
        </nav>
        <nav
          className="footer-section footer-links"
          aria-label="Bilgi ve Yardım"
        >
          <h3 tabIndex="0">Bilgi ve Yardım</h3>
          <ul>
            <li>
              <a href="/returns" tabIndex="0">
                Sipariş Takibi
              </a>
            </li>
            <li>
              <a href="/support" tabIndex="0">
                Teknik Servis Durum Sorgulama
              </a>
            </li>
            <li>
              <a href="/privacy" tabIndex="0">
                Teknik Servis Kayıt Formu
              </a>
            </li>
            <li>
              <a href="/terms" tabIndex="0">
                Ödeme Yapılacak Cihaz
              </a>
            </li>
            <li>
              <a href="/terms" tabIndex="0">
                Wiky Watch Sıfırlama Talebi
              </a>
            </li>

            <li>
              <a href="/terms" tabIndex="0">
                Wiky Watch Kurulum Destek
              </a>
            </li>
          </ul>
        </nav>
        <nav
          className="footer-section footer-links"
          aria-label="Yasal Bilgiler"
        >
          <h3 tabIndex="0">Yasal Bilgiler</h3>
          <ul>
            <li>
              <a href="/privacy-policy" tabIndex="0">
                Satış Sözleşmesi
              </a>
            </li>
            <li>
              <a href="/terms-of-use" tabIndex="0">
                Üyelik Sözleşmesi
              </a>
            </li>
            <li>
              <a href="/cookie-policy" tabIndex="0">
                Gizlilik ve Güvenlik
              </a>
            </li>
            <li>
              <a href="/returns" tabIndex="0">
                Garanti ve İade Koşulları
              </a>
            </li>
            <li>
              <a href="/support" tabIndex="0">
                Teslimat Koşulları
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className="footer-bottom" role="contentinfo" tabIndex="0">
        &copy; {new Date().getFullYear()} Wiky Watch. Tüm Hakları Saklıdır.
      </div>
    </footer>
  );
}

export default Footer;
