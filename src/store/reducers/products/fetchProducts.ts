import { fetchProductsSuccess, setIsLoading } from "./index";
import { AppDispatch } from "./../../index";

import { templateProducts } from "./index";
import { IProduct } from "../../../models/IProduct";

export const fetchProducts =
  (page: number, offset: number) => async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      const newProducts: IProduct[] = [];

      for (let i = 0; i < offset; i++) {
        const currentProduct = templateProducts[i];
        newProducts.push({
          ...currentProduct,
          id: page * offset + i,
          label: currentProduct.label + (page + 1),
        });
      }
      dispatch(fetchProductsSuccess(newProducts));

      dispatch(setIsLoading(false));
    }, 1300);
  };
