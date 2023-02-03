import styled from "styled-components";
import { DisplayCenter } from "../../components/shared";

export const Content = styled.div`
  width: 100%;
  height: max-content;
  ${DisplayCenter}

  flex-wrap: wrap;
  gap: 4rem;

  @media screen and (max-width: 852px) {
    gap: 2rem;
  }
`;

export const CategoriesBox = styled.div`
  width: 100%;
  ${DisplayCenter}

  flex-wrap: wrap;
  gap: 1rem;
  font-weight: 500;

  .selected {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

export const Category = styled.div`
  width: max-content;
  border-bottom: 2px solid #ac3636;
  padding: 1rem;
`;
