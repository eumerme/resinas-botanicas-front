import styled from "styled-components";
import { ButtonWrapper, ImageWrapper } from "../shared";

export const Content = styled.div`
  max-width: 100%;
  min-height: 400px;
  box-shadow: 0 0 9px -4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Image = styled.img`
  ${ImageWrapper}
  margin-bottom: 15px;
`;

export const Title = styled.h1`
  font-size: 1.3rem;
  font-weight: 500;
`;

export const Text = styled.p`
  font-size: 1rem;
  padding: 1rem 0;
`;

export const StyledButton = styled.button`
  ${ButtonWrapper}
`;
