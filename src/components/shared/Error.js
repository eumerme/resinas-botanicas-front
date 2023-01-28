import styled from "styled-components";
import { DisplayCenter } from "./displayCenter";

export function Error({ children }) {
  return <ContainerLE>{children}</ContainerLE>;
}

export const ContainerLE = styled.div`
  ${DisplayCenter}
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 2rem;
`;
