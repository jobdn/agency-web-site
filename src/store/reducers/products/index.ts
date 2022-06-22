import { createSlice } from "@reduxjs/toolkit";

import product1 from "../../../assets/product-1.png";
import product2 from "../../../assets/product-2.png";
import product3 from "../../../assets/product-3.png";
import product4 from "../../../assets/product-4.png";
import product5 from "../../../assets/product-5.png";
import product6 from "../../../assets/product-6.png";
import product7 from "../../../assets/product-7.png";
import product8 from "../../../assets/product-8.png";
import product9 from "../../../assets/product-9.png";

export interface IProduct {
  thumbnail: string;
  category: AvailableCategories;
  name: string;
  isSelected: boolean;
}

interface ProducsState {
  products: IProduct[];
}

type AvailableCategories = "Design" | "Branding" | "Illustration" | "Motion";

const initialState: ProducsState = {
  products: [
    {
      thumbnail: product1,
      category: "Design",
      name: "SOFA",
      isSelected: false,
    },
    {
      thumbnail: product2,
      category: "Branding",
      name: "KeyBoard",
      isSelected: false,
    },
    {
      thumbnail: product3,
      category: "Illustration",
      name: "Work Media",
      isSelected: false,
    },
    {
      thumbnail: product4,
      category: "Motion",
      name: "DDDone",
      isSelected: false,
    },
    {
      thumbnail: product5,
      category: "Design",
      name: "Abstract",
      isSelected: false,
    },
    {
      thumbnail: product6,
      category: "Branding",
      name: "HandP",
      isSelected: false,
    },
    {
      thumbnail: product7,
      category: "Motion",
      name: "Architech",
      isSelected: false,
    },
    {
      thumbnail: product8,
      category: "Design",
      name: "CalC",
      isSelected: false,
    },
    {
      thumbnail: product9,
      category: "Branding",
      name: "Sport",
      isSelected: false,
    },
  ],
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
});

export const {} = productsSlice.actions;
export default productsSlice.reducer;
