import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
  id: number;
  thumbnail: string;
  category: AvailableCategories;
  label: string;
  isSelected: boolean;
}
export const templateProducts: IProduct[] = [
  {
    id: 0,
    thumbnail: product1,
    category: "Design",
    label: "SOFA",
    isSelected: false,
  },

  {
    id: 1,
    thumbnail: product2,
    category: "Branding",
    label: "KeyBoard",
    isSelected: false,
  },
  {
    id: 2,
    thumbnail: product3,
    category: "Illustration",
    label: "Work Media",
    isSelected: false,
  },
  {
    id: 3,
    thumbnail: product4,
    category: "Motion",
    label: "DDDone",
    isSelected: false,
  },
  {
    id: 4,
    thumbnail: product5,
    category: "Design",
    label: "Abstract",
    isSelected: false,
  },
  {
    id: 5,
    thumbnail: product6,
    category: "Branding",
    label: "HandP",
    isSelected: false,
  },
  {
    id: 6,
    thumbnail: product7,
    category: "Motion",
    label: "Architech",
    isSelected: false,
  },
  {
    id: 7,
    thumbnail: product8,
    category: "Design",
    label: "CalC",
    isSelected: false,
  },
  {
    id: 8,
    thumbnail: product9,
    category: "Branding",
    label: "Sport",
    isSelected: false,
  },
];

interface ProducsState {
  products: IProduct[];
  isLoading: boolean;
  offset: number;
  page: number;
}

export type AvailableCategories =
  | "Design"
  | "Branding"
  | "Illustration"
  | "Motion";

const initialState: ProducsState = {
  products: templateProducts,
  isLoading: false,
  offset: 9,
  page: 1,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setIsLoading(state: ProducsState, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },

    fetchProductsSuccess(
      state: ProducsState,
      action: PayloadAction<IProduct[]>
    ) {
      state.products.push(...action.payload);
      state.page++;
    },

    selectProduct(state: ProducsState, action: PayloadAction<number>) {
      state.products[action.payload].isSelected =
        !state.products[action.payload].isSelected;
    },
  },
});

export const { setIsLoading, fetchProductsSuccess, selectProduct } =
  productsSlice.actions;
export default productsSlice.reducer;
