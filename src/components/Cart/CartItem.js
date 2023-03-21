import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import CartContext from "../Store/CartContext";

const CartItem = (props) => {
  const { updateQuantity } = useContext(CartContext);
  return (
    <li
      style={{
        display: "flex",
        padding: "10px",
        borderBottom: "1px solid lightgray",
      }}
    >
      <div style={{ justifyContent: "center" }}>
        <img
          src={props.imageUrl}
          style={{ width: "75px", height: "75px", marginRight: "40px" }}
          alt={props.title}
        />
        <span style={{ marginRight: "40px" }}>{props.title}</span>
        <span style={{ marginRight: "40px" }}>$ {props.price}</span>
        <input
          type="number"
          id={`quantity-${props.id}`}
          value={props.quantity}
          min="1"
          max="10"
          onChange={(event) => updateQuantity(props.id, +event.target.value)}
        />
        <Button
          style={{ marginLeft: "40px" }}
          variant="danger"
          onClick={props.onRemove}
        >
          Remove
        </Button>
      </div>
    </li>
  );
};
export default CartItem;
