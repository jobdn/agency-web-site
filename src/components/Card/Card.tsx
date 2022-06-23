import React from "react";
import { useAppDispatch } from "../../store";
import { selectProduct } from "../../store/reducers/products";

import { IProduct } from "../../models/IProduct";

import "./Card.scss";

export const Card: React.FC<IProduct> = React.memo((props) => {
  const dispatch = useAppDispatch();
  const cardClass = props.isSelected ? "card card_active" : "card";

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    dispatch(selectProduct(props.id));
  };

  return (
    <div className={cardClass} onClick={handleClick}>
      <img className="card__img" src={props.thumbnail} alt="product-1" />
      <div className="card__category">{props.category}</div>
      <div className="card__label">{props.label}</div>
    </div>
  );
});
