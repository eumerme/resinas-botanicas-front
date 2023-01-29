import { CiTrash, CiCircleMinus, CiCirclePlus } from "react-icons/ci";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { productsApi } from "../services/productsApi";
import { priceFormater } from "../utils";
import { DisplayCenter, ImageWrapper } from "./shared";

export default function CartItem({ item, cart }) {
  const { dispatch, TYPES } = cart;
  const { data: product } = useQuery("product-cart", () => productsApi.getProductDetail(item.id));

  const updateCartHandler = (item, quantity) => {
    if (product.inStock < quantity) return;

    dispatch({ type: TYPES.addToCart, payload: { ...item, quantity } });
  };

  const removeCartHandler = () => {
    dispatch({ type: TYPES.removeFromCart, payload: { ...item } });
  };

  return (
    <Item>
      <ImageBox>
        <Image src={item.image} alt={item.name} />
      </ImageBox>

      <InfoBox>
        <Link to={`/product/id/${item.id}`}>
          {item.name}
          <Total>{priceFormater(item.price)}</Total>
        </Link>
      </InfoBox>

      <CountBox>
        <button onClick={() => updateCartHandler(item, item.quantity - 1)} disabled={item.quantity === 1}>
          <CiCircleMinus />
        </button>
        <p>{item.quantity}</p>
        <button onClick={() => updateCartHandler(item, item.quantity + 1)} disabled={item.quantity === item.inStock}>
          <CiCirclePlus />
        </button>
      </CountBox>
      <CiTrash onClick={removeCartHandler} className="icon" />
    </Item>
  );
}

const Item = styled.div`
  width: 100%;
  height: max-content;
  display: grid;
  grid-template-columns: 1fr 1.7fr 0.8fr 0.5fr;
  place-items: center;

  .icon {
    font-size: 1.4rem;
    cursor: pointer;
  }
`;

const ImageBox = styled.div`
  ${DisplayCenter}
  width: 60%;
`;

const Image = styled.img`
  ${ImageWrapper}
`;

const InfoBox = styled.div`
  ${DisplayCenter}
  width: 100%;
  justify-content: flex-start;
  height: 100%;
  flex-wrap: wrap;
  padding: 0 0 0 10px;
`;

const Total = styled.div`
  padding-top: 10px;
  font-size: 0.9rem;
`;

const CountBox = styled.div`
  ${DisplayCenter}
  width: 100%;

  > p {
    padding: 0 0.7rem;
  }

  > button {
    ${DisplayCenter}
    font-size: 1.3rem;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
  }
`;
