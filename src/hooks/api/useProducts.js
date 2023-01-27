import { useAsync } from "../useAsync";
import { productsApi } from "../../services/productsApi";

export function useProducts() {
  const {
    data: products,
    loading: productsLoading,
    error: productsError,
    act: getproducts,
  } = useAsync(() => productsApi.getProducts());

  return {
    products,
    productsLoading,
    productsError,
    getproducts,
  };
}
