import React from "react";

const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (product) => {},
  removeItem: (id) => {},
  updateItem: (id, quantity) => {},
});

export default CartContext;
