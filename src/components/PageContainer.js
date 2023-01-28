import styled from "styled-components";

export default function PageContainer({ children }) {
  return <Container>{children}</Container>;
}

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  height: max-content;
  padding: 5% 10%;
  margin-top: 70px;
`;
