import React from "react";
import { IProduct } from "../../store/reducers/products";

import "./Card.scss";

export const Card: React.FC<IProduct> = (props) => {
  const cardClass = props.isSelected ? "card card_active" : "card";

  return (
    <div className={cardClass} onClick={() => {}} id="">
      <img className="card__img" src={props.thumbnail} alt="product-1" />
      <div className="card__category">{props.category}</div>
      <div className="card__label">{props.label}</div>
    </div>
  );
};
