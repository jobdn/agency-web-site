export type AvailableCategories =
  | "Design"
  | "Branding"
  | "Illustration"
  | "Motion";

export interface IProduct {
  id: number;
  thumbnail: string;
  category: AvailableCategories;
  label: string;
  isSelected: boolean;
}
