import { useQuery } from "react-query";
import styled from "styled-components";
import HomeProduct from "../components/HomeProduct";
import { DisplayCenter } from "../components/shared";
import { productsApi } from "../services/productsApi";

export default function Home() {
  const { data: products, isLoading, error } = useQuery("home-products", productsApi.getProducts); //TODO

  return (
    <>
      <Title>Últimos lançamentos</Title>
      <HomeProducts>
        {products?.map((product) => (
          <HomeProduct key={product.id} product={product} />
        ))}
      </HomeProducts>
    </>
  );
}

const Title = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
`;

const HomeProducts = styled.div`
  width: 100%;
  ${DisplayCenter}
  flex-wrap: wrap;
  gap: 2rem;
  padding-top: 3rem;

  /*   width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  padding-top: 3rem;
  align-items: center;

  @media screen and (max-width: 1074px) {
    grid-template-columns: 1fr 1fr;

    gap: 1.5rem;
  }

  @media screen and (max-width: 771px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  } */
`;
