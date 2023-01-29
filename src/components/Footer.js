import styled from "styled-components";
import { DisplayCenter } from "./shared";

export function Footer() {
  return <StyledFooter>Copyright &copy; Resinas Botânicas | All rights reserved</StyledFooter>;
}

const StyledFooter = styled.div`
  ${DisplayCenter}
  width: 100%;
  height: 30px;
  font-size: 15px;
  background-color: #9ba17b;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.152);
`;
