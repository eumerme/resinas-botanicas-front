import styled from "styled-components";
import { DisplayCenter } from "./displayCenter";

export function Message({ children }) {
  return <ContainerML>{children}</ContainerML>;
}

export const ContainerML = styled.div`
  ${DisplayCenter}
  width: 100%;
  height: 100%;
  text-align: center;
  font-size: 1.5rem;
`;
