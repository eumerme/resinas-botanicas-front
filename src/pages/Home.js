import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Product from "../components/Product";
import { PageWrapper } from "../components/shared";
import { useProducts } from "../hooks";

export default function Home() {
  const { products } = useProducts();

  return (
    <StyledHome>
      <h1>Últimos lançamentos</h1>
      <Row>
        {products?.map((product) => (
          <Col key={product.id} m={12} md={6} lg={4} xl={3}>
            <Product product={product} />
          </Col>
        ))}
      </Row>
    </StyledHome>
  );
}

const StyledHome = styled.div`
  ${PageWrapper}
  margin-top: 60px;

  > h1 {
    font-weight: 600;
    font-size: 20px;
  }
`;
