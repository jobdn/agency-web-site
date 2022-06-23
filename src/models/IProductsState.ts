import { IProduct } from "./IProduct";

export interface IProducsState {
  products: IProduct[];
  isLoading: boolean;
  offset: number;
  page: number;
}
