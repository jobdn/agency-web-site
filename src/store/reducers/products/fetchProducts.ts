import { fetchProductsSuccess, IProduct, setIsLoading } from "./index";
import { AppDispatch } from "./../../index";

import { templateProducts } from "./index";

export const fetchProducts =
  (offset: number, total: number) => async (dispatch: AppDispatch) => {
    dispatch(setIsLoading(true));
    setTimeout(() => {
      const newProducts: IProduct[] = [];

      for (let i = 0; i < offset; i++) {
        const currentProduct = templateProducts[i];
        newProducts.push({ ...currentProduct, id: total + i });
      }
      dispatch(fetchProductsSuccess(newProducts));

      dispatch(setIsLoading(false));
    }, 3000);
  };
