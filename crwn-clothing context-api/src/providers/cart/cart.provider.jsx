import React, { useEffect, createContext, useState } from "react";

import {
  addItemToCart,
  removeItemFromCart,
  filterItemFromCart,
  getCartItemsCount,
  getTotalCost,
} from "./cart.utils";

export const CartContext = createContext({
  hidden: true,
  toggleHidden: () => {},
  addItem: () => {},
  removeItem: () => {},
  clearItemFromCart: () => {},
  cartItems: [],
  cartItemsCount: 0,
  total: 0,
});

const CartProvider = ({ children }) => {
  const [hidden, setHidden] = useState(true);
  const toggleHidden = () => setHidden(!hidden);
  const [cartItems, setCartItems] = useState([]);
  const [cartItemsCount, setCartItemsCount] = useState(0);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    setCartItemsCount(getCartItemsCount(cartItems));
    setTotal(getTotalCost(cartItems));
  }, [cartItems]);

  const addItem = (item) => setCartItems(addItemToCart(cartItems, item));
  const removeItem = (item) =>
    setCartItems(removeItemFromCart(cartItems, item));
  const clearItemFromCart = (item) =>
    setCartItems(filterItemFromCart(cartItems, item));
  return (
    <CartContext.Provider
      value={{
        hidden,
        toggleHidden,
        addItem,
        cartItems,
        cartItemsCount,
        removeItem,
        clearItemFromCart,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
