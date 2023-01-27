import { css } from "styled-components";

export const ButtonBase = css`
  width: max-content;
  height: max-content;
  // color: ${({ theme }) => theme.text};
  padding: 0.75rem 1.2rem;
  // border: 1px solid ${({ theme }) => theme.text};
  border-radius: 0.4rem;
  cursor: pointer;
  transition: all 400ms ease;
  background-color: transparent;
  outline: none;
  font-size: 1rem;
`;
