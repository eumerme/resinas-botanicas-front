import { createContext, useReducer } from "react";

const StoreContext = createContext();
const initialState = Object.freeze({
  cart: {
    items: localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
  },
});
const TYPES = Object.freeze({
  addToCart: "addToCart",
  removeFromCart: "removeFromCart",
});

function reducer(state, action) {
  const { cart } = state;
  const newItem = action.payload;

  if (action.type === "addToCart") {
    const itemExists = cart.items.find(({ id }) => id === newItem.id);

    const items = itemExists
      ? cart.items.map((item) => (item.id === itemExists.id ? newItem : item))
      : [...cart.items, newItem];

    localStorage.setItem("cartItems", JSON.stringify(items));
    return { ...state, cart: { ...cart, items } };
  }

  if (action.type === "removeFromCart") {
    const items = cart.items.filter((item) => item.id !== newItem.id);

    localStorage.setItem("cartItems", JSON.stringify(items));
    return { ...state, cart: { ...cart, items } };
  }

  return state;
}

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch, TYPES }}>{children}</StoreContext.Provider>;
}

export { StoreContext, StoreProvider };
