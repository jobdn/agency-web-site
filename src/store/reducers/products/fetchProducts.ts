import { fetchProductsSuccess, IProduct, setIsLoading } from "./index";
import { AppDispatch } from "./../../index";

import { templateProducts } from "./index";

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
    }, 3000);
  };
