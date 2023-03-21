import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.items.reduce(
    (prevValue, currItem) => prevValue + currItem.price * currItem.amount,
    0
  );

  const cartItems = (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          id={item.id}
          title={item.title}
          price={item.price}
          quantity={item.quantity}
          imageUrl={item.imageUrl}
          onRemove={() => cartCtx.removeItem(item.id)}
        />
      ))}
    </ul>
  );

  return (
    <Modal onClose={props.onClose}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "10px",
        }}
      >
        <h2 style={{ textAlign: "left" }}>Cart</h2>
        <Button
          style={{
            justifyContent: "end",
            backgroundColor: "transparent",
            borderColor: "#007bff",
            color: "blue",
          }}
          onClick={props.onClose}
        >
          Close
        </Button>
      </div>
      <div style={{ padding: "10px", borderBottom: "3px solid lightgray" }}>
        <span style={{ margin: "30px", fontWeight: "bold" }}>Item</span>
        <span style={{ margin: "30px", fontWeight: "bold" }}>Name</span>
        <span style={{ margin: "20px", fontWeight: "bold" }}>Price</span>
        <span style={{ margin: "15px", fontWeight: "bold" }}>Quantity</span>
        <span style={{ margin: "40px", fontWeight: "bold" }}>Action</span>
      </div>
      {cartCtx.items.length === 0 ? (
        <p style={{ textAlign: "center", marginTop: "30px" }}>
          No items in Cart
        </p>
      ) : (
        cartItems
      )}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5px",
        }}
      >
        <span style={{ fontWeight: "bold" }}>Total Amount</span>
        <span style={{ color: "green", fontWeight: "bold" }}>
          $ {totalAmount}
        </span>
      </div>
    </Modal>
  );
};

export default Cart;
