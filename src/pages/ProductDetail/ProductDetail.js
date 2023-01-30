import { useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { GoBack } from "../../components";
import { Message, Loading, TopBox } from "../../components/shared";
import { useCart } from "../../hooks";
import { productsApi } from "../../services/productsApi";
import { priceFormater, addToCartHandler } from "../../utils";
import { Badge, Content, Image, SelectBox, StyledButton, Text, Title } from "./ProductDetailElements";

export function ProductDetail() {
  const { id } = useParams();
  const {
    data: product,
    isLoading,
    error,
  } = useQuery(["product-detail"], async () => productsApi.getProductDetail(id));
  const cart = useCart();

  const stock = Array.from(Array(product?.inStock).keys());
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {isLoading && <Loading />}
      {error && <Message>Ocorreu um erro, por favor tente em instantes.</Message>}
      {product && (
        <>
          <TopBox product>
            <GoBack />
          </TopBox>
          <Content>
            <Image src={product.image} alt={product.name} />

            <div>
              <Title>{product.name}</Title>
              <Text>{product.description}</Text>

              <Text price>{priceFormater(product.price)}</Text>

              {product.inStock > 0 && (
                <SelectBox>
                  <Badge success>Disponível :)</Badge>
                  <select onChange={(e) => setQuantity(Number(e.target.value))}>
                    {stock?.map((qty) => (
                      <option key={qty} value={qty + 1}>
                        {qty + 1}
                      </option>
                    ))}
                  </select>
                </SelectBox>
              )}
              {product.inStock === 0 && <Badge error>Indiponível :(</Badge>}

              <Text>Subtotal: {priceFormater(product.price * quantity)}</Text>

              <StyledButton
                onClick={() => addToCartHandler({ product, cart, chosenQty: quantity })}
                disabled={product.inStock === 0}
              >
                Adicionar ao carrinho
              </StyledButton>
            </div>
          </Content>
        </>
      )}
    </>
  );
}

//TODO go back button, go to cart link
