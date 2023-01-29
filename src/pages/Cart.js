import { Link } from "react-router-dom";
import styled from "styled-components";
import CartItem from "../components/CartItem";
import GoBack from "../components/GoBack";
import { ButtonWrapper, Message } from "../components/shared";
import { useCart } from "../hooks";
import { priceFormater } from "../utils";
import { Title } from "./Home";

export default function Cart() {
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

const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MsgContent = styled.div`
  > a {
    text-decoration: underline;
  }
`;

const ItemsBox = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 2fr 0.9fr;
  gap: 1.5rem;
`;

const CartContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

const CheckoutContent = styled.div`
  height: max-content;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 0 9px -4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 1.5rem;

  h1 {
    font-size: 1.1rem;
    font-weight: 500;
  }

  h2 {
    font-size: 1.3rem;
    padding: 1rem 0 1.4rem;
  }
`;

const StyledButton = styled.button`
  ${ButtonWrapper}
`;
