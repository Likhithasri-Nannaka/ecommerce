import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "../UI/Modal";
import { cartElements } from "../../data/cartElements";

const Cart = (props) => {
  const [cartItems, setCartItems] = useState(cartElements);
  const removeFromCart = (index) => {
    setCartItems((prevCartItems) => {
      return [
        ...prevCartItems.slice(0, index),
        ...prevCartItems.slice(index + 1),
      ];
    });
  };
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
        <Button style={{ justifyContent: "end" }} onClick={props.onClose}>
          Close
        </Button>
      </div>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li
          style={{
            display: "flex",
            padding: "10px",
            borderBottom: "1px solid lightgray",
            fontWeight: "bold",
          }}
        >
          <div>
            <span style={{ margin: "40px" }}>Item</span>
            <span style={{ margin: "40px" }}>Name</span>
            <span style={{ margin: "50px" }}>Price</span>
            <span style={{ margin: "15px" }}>Quantity</span>
            <span style={{ margin: "40px" }}>Action</span>
          </div>
        </li>
        {cartItems.map((item, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              padding: "10px",
              borderBottom: "1px solid lightgray",
            }}
          >
            <div>
              <img
                src={item.imageUrl}
                style={{
                  width: "75px",
                  height: "75px",
                  marginRight: "40px",
                }}
                alt={item.title}
              />
              <span style={{ margin: "40px" }}>{item.title}</span>
              <span style={{ margin: "40px" }}>${item.price}</span>
              <span style={{ margin: "40px" }}>{item.quantity}</span>
              <Button
                style={{ marginLeft: "40px" }}
                variant="danger"
                onClick={() => removeFromCart(index)}
              >
                Remove
              </Button>
            </div>
          </li>
        ))}
      </ul>
    </Modal>
  );
};

export default Cart;
