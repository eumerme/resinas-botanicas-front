import styled from "styled-components";
import { ButtonWrapper, DisplayCenter } from "../shared";

export const Wrapper = styled.div`
  ${DisplayCenter}
  width: 100%;
`;

export const Form = styled.form`
  ${DisplayCenter}
  width: 70%;
  flex-direction: column;

  > input {
    width: 100%;
    font-size: 18px;
    border: none;
    border-radius: 10px;
    outline: none;
    padding: 10px 15px;
    margin-top: 13px;
    box-shadow: 0 0 9px -4px rgba(0, 0, 0, 0.25);

    &::placeholder {
      color: #868686;
    }

    &:focus {
      border: 1px solid #9ba17b !important;
      outline: none;
    }
  }
`;

export const StyledButton = styled.button`
  ${ButtonWrapper}
  margin-top: 2rem;
`;

export const LinkBox = styled.div`
  ${DisplayCenter}
  margin-top: 32px;
  text-align: center;
`;
