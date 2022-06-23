import React from "react";
import { useAppDispatch } from "../../store";
import { selectProduct } from "../../store/reducers/products";
import { selectFilterItem } from "../../store/reducers/filter";

import { IProduct } from "../../models/IProduct";
import { AvailableFilterValues } from "../../models/IFilterItem";

import "./Card.scss";

export const Card: React.FC<IProduct> = React.memo((props) => {
  const dispatch = useAppDispatch();
  const cardClass = props.isSelected ? "card card_active" : "card";

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    dispatch(selectProduct(props.id));
  };

  const handleFilterClick = (filterCategory: AvailableFilterValues) => {
    dispatch(selectFilterItem(filterCategory));
  };

  return (
    <div className={cardClass} onClick={handleClick}>
      <img className="card__img" src={props.thumbnail} alt={props.label} />
      <div
        className="card__category"
        onClick={(e) => {
          e.stopPropagation();
          const filterValue =
            props.category.toLowerCase() as AvailableFilterValues;
          handleFilterClick(filterValue);
        }}
      >
        {props.category}
      </div>
      <div className="card__label">{props.label}</div>
    </div>
  );
});
