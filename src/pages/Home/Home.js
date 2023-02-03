import { Carousel, Image } from "react-bootstrap";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { images } from "../../assets/mock/data";
import { ProductCard, CarouselContainer } from "../../components";
import { Message, Loading } from "../../components/shared";
import { Title } from "../../components/shared/Top";
import { productsApi } from "../../services/productsApi";

export function Home() {
  const { data: products, isLoading, error } = useQuery("home-products", productsApi.getProducts);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Message>Ocorreu um erro, por favor tente em instantes.</Message>}
      {products && (
        <>
          <CarouselContainer>
            <Carousel pause="hover">
              {images.map((image, index) => (
                <Carousel.Item key={index}>
                  <Link to={`category/${image.id}`}>
                    <Image src={image.url} alt={index} fluid />
                  </Link>
                </Carousel.Item>
              ))}
            </Carousel>
          </CarouselContainer>
          <Title>Últimos lançamentos</Title>
          <ProductCard products={products} />
        </>
      )}
    </>
  );
}
