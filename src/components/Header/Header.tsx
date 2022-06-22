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
          <li key={1}>
            <a href="">About</a>
          </li>
          <li key={2}>
            <a href="">Services</a>
          </li>
          <li key={3}>
            <a href="">Pricing</a>
          </li>
          <li key={4}>
            <a href="">Blog</a>
          </li>
        </ul>
      </nav>
      <button className="header__btn">Contact</button>
    </header>
  );
};
