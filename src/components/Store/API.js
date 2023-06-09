import { useState, useEffect } from "react";

const [cart, setCart] = useState([]);
const [total, setTotal] = useState(0);
const email = authCtx.email.replace(/[^a-zA-Z0-9]/g, "");
const fetchCartHandler = useCallback(async () => {
  try {
    const response = await fetch(
      `https://react-ecommerce-012-default-rtdb.firebaseio.com/cart${email}`
    );
    if (!response.ok) {
      console.log("Failed to fetch cart items");
    }
    const data = await response.json();
    let loadedCartItems = [];
    let loadedtotalAmount = 0;
    for (const key in data) {
      loadedCartItems.push({
        id: key,
        title: data[key].title,
        imageUrl: data[key].imageUrl,
        quantity: data[key].quantity,
        price: data[key].price,
      });
      loadedtotalAmount += data[key].price * data[key].quantity;
    }
    setCart(loadedCartItems);
    setTotal(loadedtotalAmount);
  } catch (error) {
    console.log(`Failed to fetch cart items:${error.message}`);
  }
}, []);

useEffect(() => {
  fetchCartHandler();
}, []);

const addToCartHandler = async (product) => {
  const cartItems = await fetchCartHandler();
  const existingCartItemIndex = cartItems.items.findIndex(
    (item) => item.id === product.id
  );
  const existingCartItem = cartItems.items[existingCartItemIndex];
  let updatedItems;
  let updatedTotalAmount;
  if (existingCartItem) {
    const updatedItem = {
      ...existingCartItem,
      quantity: existingCartItem.quantity + 1,
      price: existingCartItem.price + product.price,
    };
    updatedItems = [...cartItems.items];
    updatedItems[existingCartItemIndex] = updatedItem;
    updatedTotalAmount = cartItems.totalAmount + product.price;
  } else {
    updatedItems = cartItems.items.concat({
      id: product.id,
      title: product.title,
      quantity: 1,
      price: product.price,
    });
    updatedTotalAmount = cartItems.totalAmount + product.price;
  }
  const response = await fetch(
    `https://react-ecommerce-012-default-rtdb.firebaseio.com/cart${email}`,
    {
      method: "PUT",
      body: JSON.stringify({
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }),
    }
  );
  if (!response.ok) {
    console.log("Failed to add item to cart");
  }
};

const removeFromCartHandler = async (productId) => {
  const cartItems = await fetchCartHandler();
  const existingCartItemIndex = cartItems.items.findIndex(
    (item) => item.id === productId
  );
  const existingCartItem = cartItems.items[existingCartItemIndex];
  if (!existingCartItem) {
    console.log("Item not found in cart");
  }
  let updatedItems;
  if (existingCartItem.quantity === 1) {
    updatedItems = cartItems.items.filter((item) => item.id !== productId);
  } else {
    const updatedItem = {
      ...existingCartItem,
      quantity: existingCartItem.quantity - 1,
      price:
        existingCartItem.price -
        existingCartItem.price / existingCartItem.quantity,
    };
    updatedItems = [...cartItems.items];
    updatedItems[existingCartItemIndex] = updatedItem;
  }
  const updatedTotalAmount = cartItems.totalAmount - existingCartItem.price;
  const response = await fetch(
    `https://react-ecommerce-012-default-rtdb.firebaseio.com/cart${email}`,
    {
      method: "PUT",
      body: JSON.stringify({
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }),
    }
  );
  if (!response.ok) {
    console.log("Failed to remove item from cart");
  }
};

const updateQuantityHandler = async (productId, quantity) => {
  const cartItems = await fetchCartHandler();
  const existingCartItemIndex = cartItems.items.findIndex(
    (item) => item.id === productId
  );
  const existingCartItem = cartItems.items[existingCartItemIndex];
  if (!existingCartItem) {
    console.log("Item not found in cart");
  }
  const updatedItem = {
    ...existingCartItem,
    quantity: quantity,
    price: (existingCartItem.price / existingCartItem.quantity) * quantity,
  };
  const updatedItems = [...cartItems.items];
  updatedItems[existingCartItemIndex] = updatedItem;
  const updatedTotalAmount = updatedItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const response = await fetch(
    `https://react-ecommerce-012-default-rtdb.firebaseio.com/cart${email}`,
    {
      method: "PUT",
      body: JSON.stringify({
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      }),
    }
  );
  if (!response.ok) {
    console.log("Failed to update item quantity");
  }
};
