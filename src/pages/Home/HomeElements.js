import styled from "styled-components";

export const Title = styled.h1`
  font-weight: 600;
  font-size: 1.7rem;
  padding-bottom: 3rem;
`;

export const HomeProducts = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media screen and (min-width: 1300px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media screen and (max-width: 1074px) {
    grid-template-columns: 1fr 1fr;
    gap: 1.5rem;
  }

  @media screen and (max-width: 771px) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;
