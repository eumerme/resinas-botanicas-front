import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Message, Loading } from "../../components/shared";
import { useCart } from "../../hooks";
import { productsApi } from "../../services/productsApi";
import { priceFormater, addToCartHandler } from "../../utils";
import { Badge, Content, Image, StyledButton, Text, Title } from "./ProductDetailElements";

export function ProductDetail() {
  const { id } = useParams();
  const { data: product, isLoading, error } = useQuery("product-detail", () => productsApi.getProductDetail(id));
  const cart = useCart();

  return (
    <>
      {isLoading && <Loading />}
      {error && <Message>Ocorreu um erro, por favor tente em instantes.</Message>}
      {product && (
        <>
          <Content>
            <Image src={product.image} alt={product.name} />

            <div>
              <Title>{product.name}</Title>
              <Text>{product.description}</Text>

              <Text price>{priceFormater(product.price)}</Text>

              {product.inStock > 0 && <Badge success>Disponível :)</Badge>}
              {product.inStock === 0 && <Badge error>Indiponível :(</Badge>}

              <Text>Total: {priceFormater(product.price)}</Text>

              <StyledButton onClick={() => addToCartHandler({ product, cart })} disabled={product.inStock === 0}>
                Adicionar ao carrinho
              </StyledButton>
            </div>
          </Content>
        </>
      )}
    </>
  );
}
