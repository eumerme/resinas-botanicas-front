import { Link } from "react-router-dom";
import { CartItem, GoBack } from "../../components";
import { Message } from "../../components/shared";
import { useCart } from "../../hooks";
import { priceFormater } from "../../utils";
import { Title } from "../Home/HomeElements";
import { CartContent, CheckoutContent, ItemsBox, MsgContent, StyledButton, TopBox } from "./CartElements";

export function Cart() {
  const cart = useCart();
  const {
    cart: { items },
  } = cart.state;

  const itemsQty = items.reduce((acc, curr) => acc + curr.quantity, 0);
  const subtotal = items.reduce((acc, curr) => acc + curr.price * curr.quantity, 0);

  return (
    <>
      <TopBox>
        <Title>Carrinho</Title>
        <GoBack />
      </TopBox>
      {items.length === 0 && (
        <Message>
          <MsgContent>
            Seu carrinho está vazinho, <Link to="/">continue comprando</Link>
          </MsgContent>
        </Message>
      )}
      {items.length > 0 && (
        <ItemsBox>
          <CartContent>
            {items.map((item) => (
              <CartItem key={item.id} item={item} cart={cart} />
            ))}
          </CartContent>
          <CheckoutContent>
            <h1>{`Subtotal (${itemsQty} itens):`}</h1>
            <h2>{`${priceFormater(subtotal)}`}</h2>

            <StyledButton>Comprar</StyledButton>
          </CheckoutContent>
        </ItemsBox>
      )}
    </>
  );
}
