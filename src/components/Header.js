import React from "react";
import {Link} from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <img src="/images/header__logo.png" alt="a pokeball" className="header__logo" />
      <nav className="header__navbar">
        <ul className="header__navbar-home">
          <Link to="/" className="header__navbar-link_home">
            <a href="/" className="header__navbar-link_home">Home</a>
          </Link>
        </ul>
        <ul className="header__navbar-app">
          <Link to={"/app"} >
            <button className="header__navbar-button">
            <a href="/" className="header__navbar-link_app">App</a>
            </button>
          </Link>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
