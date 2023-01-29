import { toast } from "react-toastify";

export function addToCartHandler({ product, cart, choosenQty = 1 }) {
  const { state, dispatch, TYPES } = cart;

  const itemExists = state.cart.items.find(({ id }) => id === product.id);
  const quantity = itemExists ? itemExists.quantity + choosenQty : choosenQty;

  if (product.inStock < quantity) {
    toast.error("Quantidade não disponível no estoque");
    return;
  }

  dispatch({ type: TYPES.addToCart, payload: { ...product, quantity } });
}
