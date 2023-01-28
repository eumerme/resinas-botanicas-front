import styled from "styled-components";
import { DisplayCenter } from "./displayCenter";

export const Badge = styled.div`
  ${DisplayCenter}
  width: max-content;
  height: max-content;
  padding: 8px 15px;
  background-color: ${({ inStock }) => (inStock ? "#198754" : "#dc3545")};
  margin-top: 2rem;
  border-radius: 30px;
  color: #ffffff;
  font-size: 15px;
  font-weight: 500;
`;
