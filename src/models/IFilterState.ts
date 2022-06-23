import { AvailableFilterValues, IFilterItem } from "./IFilterItem";

export interface IFilterState {
  filterItems: IFilterItem[];
  activeFilterItem: AvailableFilterValues;
}
