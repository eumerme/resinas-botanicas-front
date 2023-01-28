import { Link } from "react-router-dom";
import styled from "styled-components";
import priceFormater from "../utils/priceFormater";
import { ImageWrapper, ButtonWrapper } from "./shared";

export default function HomeProduct({ product }) {
  return (
    <Content>
      <Link to={`/product/${product.id}`}>
        <Image src={product.image} alt={product.name} />
        <Title>{product.name}</Title>
        <Text>{priceFormater(product.price)}</Text>
      </Link>
      <StyledButton>Adicionar ao carrinho</StyledButton>
    </Content>
  );
}

const Content = styled.div`
  max-width: 30%;
  min-height: 400px;
  background-color: inherit;
  box-shadow: 0 0 9px -4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 1.5rem;

  @media screen and (max-width: 1335px) {
    max-width: 40%;
  }
  @media screen and (max-width: 1002px) {
    max-width: 45%;
  }
  @media screen and (max-width: 904px) {
    max-width: 80%;
  }
  @media screen and (max-width: 700px) {
    max-width: 100%;
  }
`;

const Image = styled.img`
  ${ImageWrapper}
`;

const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
`;

const Text = styled.p`
  font-size: 1rem;
  padding: 1rem 0;
`;

const StyledButton = styled.button`
  ${ButtonWrapper}
`;
