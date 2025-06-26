import React from "react";
import { IoMdMenu } from "react-icons/io";
import { SlBasketLoaded } from "react-icons/sl";
import { CiUser } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { RiShoppingBasketLine } from "react-icons/ri";
import "./Header.css";

function Header() {
  return (
    <header className="header" id="header">
      <nav className="header__nav" aria-label="Ana menü">
        <div className="header__nav--left">
          <button className="nav__item" aria-label="Menü">
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
          <form role="search" className="nav__search">
            <label htmlFor="search" className="sr-only">
              Ürün Ara
            </label>
            <input
              id="search"
              type="search"
              className="nav__search-input"
              placeholder="Ürün ara..."
              aria-label="Ürün ara"
            />
          </form>
        </div>

        <div className="header__nav--center">
          <a href="/" aria-label="Anasayfa">
            <img
              src="/logo.png"
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
  );
}

export default Header;
