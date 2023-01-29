import { Link } from "react-router-dom";
import { useCart } from "../../hooks";
import { addToCartHandler, priceFormater } from "../../utils";
import { Content, Image, StyledButton, Text, Title } from "./ProductCardElements";

export function ProductCard({ product }) {
  const cart = useCart();

  return (
    <Content>
      <Link to={`/product/${product.id}`}>
        <Image src={product.image} alt={product.name} />
        <Title>{product.name}</Title>
        <Text>{priceFormater(product.price)}</Text>
      </Link>
      <StyledButton onClick={() => addToCartHandler({ product, cart })}>Adicionar ao carrinho</StyledButton>
    </Content>
  );
}
