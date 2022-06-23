import React from "react";

import { IFilterProps } from "../../models/IFilterProps";
import { IFilterItem } from "../../models/IFilterItem";

import "./FilterMenu.scss";

const filterItems: IFilterItem[] = [
  {
    id: 0,
    text: "Show all",
    isActive: true,
    filterValue: "Show all",
  },
  {
    id: 1,
    text: "Design",
    isActive: false,
  },
  {
    id: 2,
    text: "Branding",
    isActive: false,
  },
  {
    id: 3,
    text: "Illustration",
    isActive: false,
  },
  {
    id: 4,
    text: "Motion",
    isActive: false,
  },
];

export const FilterMenu: React.FC<IFilterProps> = ({ changeFilter }) => {
  const [items, setItems] = React.useState<IFilterItem[]>(filterItems);

  const selectItem = (selectedItem: IFilterItem) => {
    const newItems = items.map((item) => {
      return item.id === selectedItem.id
        ? { ...item, isActive: true }
        : { ...item, isActive: false };
    });
    setItems(newItems);

    const filterValue = selectedItem.filterValue ? "" : selectedItem.text;
    changeFilter(filterValue);
  };

  return (
    <nav>
      <ul>
        {items.map((item) => (
          <li
            className={item.isActive ? "active" : ""}
            key={item.id}
            onClick={() => selectItem(item)}
          >
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
