import React from "react";

import { AvailableFilterValues } from "../../models/IFilterItem";

import "./FilterMenu.scss";
import { useAppDispatch, useTypedSelector } from "../../store";
import { selectFilterItem } from "../../store/reducers/filter";

export const FilterMenu: React.FC = () => {
  const { filterItems, activeFilterItem } = useTypedSelector(
    (state) => state.filter
  );
  const dispatch = useAppDispatch();

  const handleMenuClick = (item: AvailableFilterValues) => {
    dispatch(selectFilterItem(item));
  };

  return (
    <nav>
      <ul>
        {filterItems.map((item) => (
          <li
            className={item.filterValue === activeFilterItem ? "active" : ""}
            key={item.id}
            onClick={() => handleMenuClick(item.filterValue)}
          >
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
