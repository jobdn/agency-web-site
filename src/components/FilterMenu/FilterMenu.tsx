import React from "react";

import { FilterProps } from "../../models/FilterProps";
import { FilterItem } from "../../models/FilterItem";

import "./FilterMenu.scss";

const filterItems: FilterItem[] = [
  {
    id: 0,
    text: "Show all",
    isActive: true,
    filterValue: "",
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

export const FilterMenu: React.FC<FilterProps> = ({ changeFilter }) => {
  const [items, setItems] = React.useState<FilterItem[]>(filterItems);

  const selectFilter = (selectedItem: FilterItem) => {
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
            onClick={() => selectFilter(item)}
          >
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
};
