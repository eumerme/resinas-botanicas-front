import { useAsync } from "../useAsync";
import { productsApi } from "../../services/productsApi";

export function useProductDetail() {
  const {
    data: productDetail,
    loading: productDetailLoading,
    error: productDetailError,
    act: getProductDetail,
  } = useAsync((data) => productsApi.getProductDetail(data), false);

  return {
    productDetail,
    productDetailLoading,
    productDetailError,
    getProductDetail,
  };
}
