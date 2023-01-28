import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { ButtonWrapper, Error, ImageWrapper, Loading } from "../components/shared";
import { productsApi } from "../services/productsApi";
import priceFormater from "../utils/priceFormater";

export default function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useQuery("product-detail", () => productsApi.getProductDetail(id)); //TODO

  return (
    <>
      {isLoading && <Loading />}
      {error && <Error>Ocorreu um erro, por favor tente em instantes.</Error>}
      {product && (
        <Content>
          <Image src={product.image} alt={product.name} />

          <div>
            <Title>{product.name}</Title>
            <Text>{product.description}</Text>

            <Text price>{priceFormater(product.price)}</Text>

            {product.inStock > 0 && <Badge inStock>Disponível :)</Badge>}
            {product.inStock === 0 && <Badge>Indiponível :(</Badge>}

            <Text>Total: {priceFormater(product.price)}</Text>

            <StyledButton disabled={product.inStock === 0}>Adicionar ao carrinho</StyledButton>
          </div>
        </Content>
      )}
    </>
  );
}

const Image = styled.img`
  ${ImageWrapper}
  max-width: 400px;
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.25);
  margin: 0 auto;
`;

const Content = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 6rem;

  @media screen and (max-width: 852px) {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`;

const Title = styled.h1`
  font-size: 1.7rem;
  font-weight: 600;
`;

const Text = styled.p`
  font-size: 1rem;
  padding: 1rem 0;

  ${({ price }) => {
    if (price) {
      return `
        font-size: 1.3rem;
        font-weight: 500;
			`;
    }
  }}
`;

const Badge = styled.div`
  width: max-content;
  padding: 8px 15px;
  background-color: ${({ inStock }) => (inStock ? "#198754" : "#dc3545")};
  margin-top: 2rem;
  border-radius: 30px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
`;

const StyledButton = styled.button`
  ${ButtonWrapper}
  margin-top: 10px;
`;
