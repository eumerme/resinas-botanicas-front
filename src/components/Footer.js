import styled from "styled-components";
import { DisplayCenter } from "./shared";
import { BsInstagram, BsWhatsapp } from "react-icons/bs";

export function Footer() {
  return (
    <StyledFooter>
      <Wrapper>
        <Socials href="https://www.instagram.com/resinasbotanicas/" target="_blank" rel="noreferrer">
          <BsInstagram />
        </Socials>
        <Socials href="" target="_blank" rel="noreferrer">
          <BsWhatsapp />
        </Socials>
      </Wrapper>
      Copyright &copy; Resinas Botânicas | All rights reserved
    </StyledFooter>
  );
}

const StyledFooter = styled.div`
  ${DisplayCenter}
  flex-direction: column;
  width: 100%;
  font-size: 15px;
  padding: 2rem;
  text-align: center;
  background-color: #b9a46c;
  box-shadow: -1px -1px 10px rgba(255, 255, 255, 0.5);
`;

const Wrapper = styled.div`
  ${DisplayCenter}
  height: max-content;
  gap: 0.6rem;
  color: #ffffff;
  width: 100%;
  margin-bottom: 2rem;
`;

const Socials = styled.a`
  font-size: 18px;
  display: grid;
  place-items: center;
  padding: 0.5rem 0.5rem;
  border-radius: 0.5rem;
  background-color: #ac3636;

  :hover {
    border: 1px solid #3f6555;
    color: #000000;
    background-color: transparent;
  }
`;
