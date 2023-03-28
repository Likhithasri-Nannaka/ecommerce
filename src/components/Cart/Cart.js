import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Modal from "../UI/Modal";
import CartContext from "../Store/CartContext";
import CartItem from "./CartItem";
import { Table } from "react-bootstrap";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = cartCtx.items.reduce(
    (prevValue, currItem) => prevValue + currItem.price * currItem.amount,
    0
  );

  const cartItems = (
    <tbody>
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
    </tbody>
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
      <Table style={{ width: "100%" }}>
        <thead>
          <tr style={{ borderBottom: "3px solid lightgray" }}>
            <th style={{ textAlign: "left", padding: "10px" }}>Item</th>
            <th style={{ textAlign: "left", padding: "10px" }}>Name</th>
            <th style={{ textAlign: "left", padding: "10px" }}>Price</th>
            <th style={{ textAlign: "left", padding: "10px" }}>Quantity</th>
            <th style={{ textAlign: "left", padding: "10px" }}>Action</th>
          </tr>
        </thead>
        {cartCtx.items.length === 0 ? (
          <tbody>
            <tr>
              <td
                colSpan="5"
                style={{ textAlign: "center", marginTop: "30px" }}
              >
                No items in Cart
              </td>
            </tr>
          </tbody>
        ) : (
          cartItems
        )}
        <tfoot>
          <tr style={{ borderTop: "1px solid lightgray" }}>
            <td colSpan="3" style={{ textAlign: "right", fontWeight: "bold" }}>
              Total Amount :
            </td>
            <td
              colSpan="3"
              style={{ textAlign: "left", color: "green", fontWeight: "bold" }}
            >
              $ {totalAmount}
            </td>
          </tr>
        </tfoot>
      </Table>
    </Modal>
  );
};

export default Cart;
