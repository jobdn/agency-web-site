import React from "react";
import logo from "../../assets/logo.png";

import "./Header.scss";

export const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="logo">
        <img alt="logo" src={logo} />
      </div>
      <nav>
        <ul>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Services</a>
          </li>
          <li>
            <a href="">Pricing</a>
          </li>
          <li>
            <a href="">Blog</a>
          </li>
        </ul>
      </nav>
      <button className="header__btn">Contact</button>
    </header>
  );
};
