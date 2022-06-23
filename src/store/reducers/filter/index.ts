import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import {
  IFilterItem,
  AvailableFilterValues,
} from "../../../models/IFilterItem";
import { IFilterState } from "../../../models/IFilterState";

const filterButtoms: IFilterItem[] = [
  {
    id: 0,
    text: "Show all",
    filterValue: "",
  },
  {
    id: 1,
    text: "Design",
    filterValue: "design",
  },
  {
    id: 2,
    text: "Branding",
    filterValue: "branding",
  },
  {
    id: 3,
    text: "Illustration",
    filterValue: "illustration",
  },
  {
    id: 4,
    text: "Motion",
    filterValue: "motion",
  },
];

const initialState: IFilterState = {
  filterItems: filterButtoms,
  filter: "",
};

export const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    selectFilterItem(
      state: IFilterState,
      action: PayloadAction<AvailableFilterValues>
    ) {
      state.filter = action.payload;
    },
  },
});

export const { selectFilterItem } = filterSlice.actions;
export default filterSlice.reducer;
