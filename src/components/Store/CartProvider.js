import { useContext, useState, useEffect } from "react";
import CartContext from "./CartContext";
import AuthContext from "./Auth-Context";

const defaultCart = {
  items: [],
  totalAmount: 0,
};

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);
  const email = authCtx.email.replace(/[^a-zA-Z0-9]/g, "");
  const [cart, setCart] = useState(defaultCart);
  if (!sessionStorage.getItem("fetchExecuted") && authCtx.isLoggedIn) {
    fetch(
      `https://react-ecommerce-012-default-rtdb.firebaseio.com/cart${email}.json`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: [], totalAmount: 0 }),
      }
    );
    sessionStorage.setItem("fetchExecuted", true);
  }
  useEffect(() => {
    if (!authCtx.isLoggedIn) {
      setCart(defaultCart);
    }
  }, [authCtx.isLoggedIn]);
  const addItemtoCart = async (item) => {
    const existingCartItemIndex = cart.items.findIndex(
      (cartItem) => cartItem.id === item.id
    );
    const existingCartItem = cart.items[existingCartItemIndex];
    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + 1,
        amount: existingCartItem.amount + item.amount,
      };
      updatedItems = [...cart.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      const newItem = {
        ...item,
        quantity: 1,
      };
      updatedItems = cart.items.concat(newItem);
    }
    const updatedTotalAmount = cart.totalAmount + item.amount;
    setCart({
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    });
    try {
      const response = await fetch(
        `https://react-ecommerce-012-default-rtdb.firebaseio.com/cart${email}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: updatedItems,
            totalAmount: updatedTotalAmount,
          }),
        }
      );
      if (!response.ok) {
        console.log("Something went wrong while adding the item to database");
      } else {
        console.log("Successfully added item to the database");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const removeItemFromCart = async (id) => {
    const existingCartItemIndex = cart.items.findIndex(
      (cartItem) => cartItem.id === id
    );
    const existingItem = cart.items[existingCartItemIndex];
    const updatedTotalAmount = cart.totalAmount - existingItem.amount;
    const updatedItems = cart.items.filter((item) => item.id !== id);
    setCart({
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    });
    try {
      const response = await fetch(
        `https://react-ecommerce-012-default-rtdb.firebaseio.com/cart${email}.json`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: updatedItems,
            totalAmount: updatedTotalAmount,
          }),
        }
      );
      if (!response.ok) {
        console.log(
          "Something went wrong while deleting the item from database"
        );
      } else {
        console.log("Successfully deleted the item from database");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const updateQuantity = async (id, quantity) => {
    const existingCartItemIndex = cart.items.findIndex(
      (cartItem) => cartItem.id === id
    );
    const existingItem = cart.items[existingCartItemIndex];
    const updatedItem = {
      ...existingItem,
      quantity: quantity,
      amount: (existingItem.amount / existingItem.quantity) * quantity,
    };
    const updatedItems = [...cart.items];
    updatedItems[existingCartItemIndex] = updatedItem;
    const updatedTotalAmount = cart.items.reduce(
      (acc, item) => acc + item.amount,
      0
    );
    setCart({
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    });
    try {
      const response = await fetch(
        `https://react-ecommerce-012-default-rtdb.firebaseio.com/cart${email}.json`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            items: updatedItems,
            totalAmount: updatedTotalAmount,
          }),
        }
      );
      if (!response.ok) {
        console.log("Something went wrong while updating the item in database");
      } else {
        console.log("Successfully updated the item in database");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchCartItems = async () => {
    try {
      const response = await fetch(
        `https://react-ecommerce-012-default-rtdb.firebaseio.com/cart${email}.json`
      );
      if (!response.ok) {
        console.log(
          "Something went wrong while fetching Items from the database"
        );
      } else {
        console.log("Successfully fetched items from the database");
      }
      const data = await response.json();
      setCart({
        items: data.items,
        totalAmount: data.totalAmount,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchCartItems();
  }, []);
  const cartContext = {
    items: cart.items,
    totalAmount: cart.totalAmount,
    addItem: addItemtoCart,
    removeItem: removeItemFromCart,
    updateQuantity: updateQuantity,
    getItems: fetchCartItems,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
