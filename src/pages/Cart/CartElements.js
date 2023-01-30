import styled from "styled-components";
import { ButtonWrapper } from "../../components/shared";

export const MsgContent = styled.div`
  > a {
    text-decoration: underline;
  }
`;

export const ItemsBox = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 2fr 0.9fr;
  gap: 1.5rem;

  @media screen and (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

export const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

export const CheckoutContent = styled.div`
  height: max-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 9px -4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 1.5rem;

  h1 {
    font-size: 1.1rem;
    font-weight: 500;
  }

  h2 {
    font-size: 1.3rem;
    padding: 1rem 0 1.4rem;
  }

  @media screen and (max-width: 1024px) {
    margin-top: 2rem;
  }
`;

export const StyledButton = styled.button`
  ${ButtonWrapper}
`;
