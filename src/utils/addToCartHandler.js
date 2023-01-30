import { toast } from "react-toastify";

export function addToCartHandler({ product, cart, chosenQty = 1 }) {
  const { state, dispatch, TYPES } = cart;

  const itemExists = state.cart.items.find(({ id }) => id === product.id);
  const quantity = itemExists ? itemExists.quantity + chosenQty : chosenQty;

  if (product.inStock < quantity) {
    toast.error("Quantidade não disponível em estoque");
    return;
  }

  dispatch({ type: TYPES.addToCart, payload: { ...product, quantity } });
}
