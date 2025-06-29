import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { SlBasketLoaded } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";
import WikyLogo from "../assets/logo.png";
import { MdAddCall } from "react-icons/md";
import { MdOutlineMiscellaneousServices } from "react-icons/md";
import { fetchSearchResult } from "../../redux/slices/SearchSlice";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import "./Header.css";

function Header() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  function searchHandle(e) {
    setSearch(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!search.trim()) return;
    dispatch(fetchSearchResult(search)).then(() => {
      navigate(`/search?q=${encodeURIComponent(search)}`);
    });
  }

  return (
    <>
      <header className="header" id="header">
        <nav className="header__nav" aria-label="Ana menü">
          <div className="header__nav--left">
            <button
              className="nav__item"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasScrolling"
              aria-controls="offcanvasScrolling"
              aria-label="Menü"
            >
              <IoMdMenu className="nav__icon" />
              <span className="nav__text">Menü</span>
            </button>
            <a
              href="/siparis-takip"
              className="nav__item"
              aria-label="Sipariş Takibi"
            >
              <SlBasketLoaded className="nav__icon" />
              <span className="nav__text">Sipariş Takibi</span>
            </a>
            <form onSubmit={handleSubmit} role="search" className="nav__search">
              <label htmlFor="search" className="sr-only">
                Ürün Ara
              </label>
              <input
                id="search"
                type="search"
                value={search}
                onChange={searchHandle}
                className="nav__search-input"
                placeholder="Ürün ara..."
                aria-label="Ürün ara"
              />
            </form>
          </div>

          <div className="header__nav--center">
            <a href="/" aria-label="Anasayfa">
              <img
                src={WikyLogo}
                alt="Wiky Anasayfa Logosu"
                className="header__logo"
                loading="lazy"
              />
            </a>
          </div>

          <div className="header__nav--right">
            <a href="/giris" className="nav__item" aria-label="Üye Girişi">
              <CiUser className="nav__icon" />
              <span className="nav__text">Giriş Yap</span>
            </a>
            <a href="/favoriler" className="nav__item" aria-label="Favorilerim">
              <MdFavoriteBorder className="nav__icon" />
              <span className="nav__text">Favoriler</span>
            </a>
            <a href="/sepet" className="nav__item" aria-label="Sepetim">
              <RiShoppingBasketLine className="nav__icon" />
              <span className="nav__text">Sepetim</span>
            </a>
          </div>
        </nav>
      </header>
      <div
        className="offcanvas offcanvas-start"
        data-bs-scroll="true"
        data-bs-backdrop="false"
        tabIndex="-1"
        id="offcanvasScrolling"
        aria-labelledby="offcanvasScrollingLabel"
      >
        <div className="offcanvas-header border-bottom">
          <img
            src={WikyLogo}
            alt="Wiky Logo"
            style={{ height: "40px" }}
            className="me-2"
          />
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        <div className="offcanvas-body d-flex flex-column justify-content-between">
          {/* Üst İçerik */}
          <div>
            {/* Arama Kutusu */}
            <div className="mb-4">
              <input
                type="search"
                className="form-control"
                placeholder="Ürün ara..."
                aria-label="Arama"
              />
            </div>

            {/* Menü Listesi */}
            <ul className="list-group list-group-flush">
              <li className="list-group-item border-0">
                <a href="/" className="text-decoration-none text-dark">
                  Anasayfa
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/akilli-cocuk-saatleri"
                  className="text-decoration-none text-dark"
                >
                  Akıllı Çocuk Saatleri
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/aksesuar-magazasi"
                  className="text-decoration-none text-dark"
                >
                  Aksesuar Mağazası
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/bilgi-bankasi"
                  className="text-decoration-none text-dark"
                >
                  Bilgi Bankası
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/medyada-biz"
                  className="text-decoration-none text-dark"
                >
                  Medyada Biz
                </a>
              </li>
              <li className="list-group-item border-0">
                <a
                  href="/teknik-servis"
                  className="text-decoration-none text-dark"
                >
                  Teknik Servis
                </a>
              </li>
              <li className="list-group-item border-0">
                <a href="/hemen-bilgi-al" className="btn btn-danger w-100 mt-1">
                  Hemen Bilgi Al
                </a>
              </li>
              <li className="list-group-item border-0">
                <a href="/hemen-bilgi-al" className="btn btn-success w-100">
                  <i class="bi bi-whatsapp"></i> Whatsaaptan Ulaş
                </a>
              </li>
            </ul>
            <div className="pt-3">
              <div className="row text-center">
                <div className="col-md-6">
                  <h6 className="">
                    <MdAddCall /> Müşteri Hizmetleri
                  </h6>
                  <p className="mb-1"> 0850 123 45 67</p>
                </div>
                <div className="col-md-6">
                  <h6 className="">
                    <MdOutlineMiscellaneousServices /> Teknik Servis
                  </h6>
                  <p className="mb-1">0212 123 45 67</p>
                </div>
              </div>
              <h6 className="text-center mt-3">Bizi Takip Edin</h6>
              <div className="d-flex gap-3 fs-5 text-center">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-instagram"></i>
                </a>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-youtube"></i>
                </a>
                <a
                  href="https://www.tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="bi bi-tiktok"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
