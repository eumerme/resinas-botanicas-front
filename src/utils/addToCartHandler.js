import { toast } from "react-toastify";

export function addToCartHandler({ product, cart }) {
  const { state, dispatch, TYPES } = cart;

  const itemExists = state.cart.items.find(({ id }) => id === product.id);
  const quantity = itemExists ? itemExists.quantity + 1 : 1;

  if (product.inStock < quantity) {
    toast.error("Quantidade não disponível no estoque");
    return;
  }

  dispatch({ type: TYPES.addToCart, payload: { ...product, quantity } });
}
