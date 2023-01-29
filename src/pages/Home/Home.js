import { useQuery } from "react-query";
import { HomeProduct } from "../../components";
import { Message, Loading } from "../../components/shared";
import { productsApi } from "../../services/productsApi";
import { HomeProducts, Title } from "./HomeElements";

export function Home() {
  const { data: products, isLoading, error } = useQuery("home-products", productsApi.getProducts);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Message>Ocorreu um erro, por favor tente em instantes.</Message>}
      {products && (
        <>
          <Title>Últimos lançamentos</Title>
          <HomeProducts>
            {products?.map((product) => (
              <HomeProduct key={product.id} product={product} />
            ))}
          </HomeProducts>
        </>
      )}
    </>
  );
}
