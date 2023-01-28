import { css } from "styled-components";

export const ButtonWrapper = css`
  width: max-content;
  height: max-content;
  padding: 0.75rem 1.2rem;
  border: 1px solid #9ba17bdb;
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 400ms ease;
  background-color: #c2ca96db;
  outline: none;
  font-size: 1rem;

  &:hover {
    background-color: transparent;
  }
`;
