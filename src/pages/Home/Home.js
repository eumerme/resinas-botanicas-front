import { useQuery } from "react-query";
import { images } from "../../assets/mock/data";
import { ProductCard, CarouselContainer } from "../../components";
import { Message, Loading } from "../../components/shared";
import { Title } from "../../components/shared/Top";
import { productsApi } from "../../services/productsApi";
import { HomeProducts } from "./HomeElements";

export function Home() {
  const { data: products, isLoading, error } = useQuery("home-products", productsApi.getProducts);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Message>Ocorreu um erro, por favor tente em instantes.</Message>}
      {products && (
        <>
          <CarouselContainer>
            {images.map((image, index) => (
              <img src={image.url} alt={index} key={index} />
            ))}
          </CarouselContainer>
          <Title>Últimos lançamentos</Title>
          <HomeProducts>
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </HomeProducts>
        </>
      )}
    </>
  );
}
