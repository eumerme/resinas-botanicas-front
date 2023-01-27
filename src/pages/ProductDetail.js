import { useEffect } from "react";
import { Button, Card, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { PageWrapper } from "../components/shared";
import { useProductDetail } from "../hooks";
import priceFormater from "../utils/priceFormater";

export default function ProductDetail() {
  const { id } = useParams();
  const { productDetail: product, getProductDetail } = useProductDetail();

  const getDetail = async () => {
    await getProductDetail(id);
  };

  useEffect(() => {
    getDetail();
  }, [id]);

  return (
    <StyledProductDetail>
      {product && (
        <Content>
          <ImageWrapper>
            <Image src={product.image} alt={product.name} fluid rounded />
          </ImageWrapper>
          <div>
            <Title>
              <strong>{product.name}</strong>
            </Title>
            <Card.Text className="my-3">{product.description}</Card.Text>
            <Card.Text className="my-5">
              <strong>{priceFormater(product.price)}</strong>
            </Card.Text>

            <Card.Text className="my-3">Status: {product.inStock > 0 ? "Em estoque" : "Sem estoque :("}</Card.Text>
            <Card.Text className="my-3">Total: {priceFormater(product.price)}</Card.Text>

            <StyledButton variant="light" disabled={product.inStock === 0}>
              Adicionar ao carrinho
            </StyledButton>
          </div>
        </Content>
      )}
    </StyledProductDetail>
  );
}

const StyledProductDetail = styled.div`
  ${PageWrapper}
`;

const ImageWrapper = styled.div`
  box-shadow: 0 0 8px -4px rgba(0, 0, 0, 0.25);
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

const Title = styled.div`
  font-size: 25px;
`;

const StyledButton = styled(Button)`
  margin-top: 10px;
  background-color: #cfbb8f;
  &:hover {
    background-color: #e2bc70;
  }
`;
