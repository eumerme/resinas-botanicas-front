import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styled from "styled-components";

export function CarouselContainer({ children }) {
  return (
    <Wrapper>
      <Carousel
        showDots
        autoPlay
        draggable
        infinite
        pauseOnHover
        swipeable
        ssr
        centerMode={true}
        transitionDuration={5000}
        autoPlaySpeed={8000}
        arrows={false}
        responsive={responsive}
      >
        {children}
      </Carousel>
    </Wrapper>
  );
}

const responsive = Object.freeze({
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
});

const Wrapper = styled.div`
  display: grid;
  margin-bottom: 2rem;

  > div {
    width: 100%;
    max-height: 400px;
    place-self: center;

    > ul > li > img {
      width: 100%;
      object-fit: contain;
      padding: 1rem;
    }
  }
`;
