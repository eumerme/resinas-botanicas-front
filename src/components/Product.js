import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Product({ product }) {
  return (
    <StyledCard className="my-3 p-3 rounded">
      <Link to={`/product/${product.id}`}>
        <Card.Img src={product.image} variant="top" />

        <Card.Body>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text className="my-3">{priceFormater(product.price)}</Card.Text>
        </Card.Body>
      </Link>

      <StyledButton variant="light">Adicionar ao carrinho</StyledButton>
    </StyledCard>
  );
}

function priceFormater(value) {
  return (value / 100).toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
}

const StyledButton = styled(Button)`
  width: max-content;
  margin: 0 auto;
  background-color: #eae2d1;
  &:hover {
    background-color: #dcd6ca;
  }
`;

const StyledCard = styled(Card)`
  background-color: inherit;
  box-shadow: 0 0 10px -4px rgba(0, 0, 0, 0.25);
`;
