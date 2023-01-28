import { createContext, useContext, useReducer } from "react";

const StoreContext = createContext();
const initialState = Object.freeze({
  cart: {
    items: [],
  },
});
const TYPES = Object.freeze({
  addToCart: "add-item",
});

function reducer(state, action) {
  const { cart } = state;

  const newItem = action.payload;
  const itemExists = cart.items.find(({ id }) => id === newItem.id);

  const items = itemExists
    ? cart.items.map((item) => (item.id === itemExists.id ? newItem : item))
    : [...cart.items, newItem];

  if (action.type === "add-item") {
    return { ...state, cart: { ...cart, items } };
  }
  return state;
}

function StoreProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return <StoreContext.Provider value={{ state, dispatch, TYPES }}>{children}</StoreContext.Provider>;
}

function useCart() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("Cart context not found");
  }
  return context;
}

export { useCart, StoreProvider };
