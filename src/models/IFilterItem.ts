export type AvailableFilterValues =
  | ""
  | "design"
  | "branding"
  | "illustration"
  | "motion";

export interface IFilterItem {
  id: number;
  text: string;
  filterValue: AvailableFilterValues;
}
