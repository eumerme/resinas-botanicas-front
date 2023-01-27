import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";

export default function Footer() {
  return (
    <StyledFooter>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; Resinas Botânicas | All rights reserved </Col>
        </Row>
      </Container>
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  width: 100%;
  font-size: 10px;
  background-color: #9ba17b;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.152);
`;
