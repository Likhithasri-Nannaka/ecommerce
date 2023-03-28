import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import CartContext from "../Store/CartContext";

const CartItem = (props) => {
  const { updateQuantity } = useContext(CartContext);
  return (
    <tr style={{ borderBottom: "1px solid lightgray" }}>
      <td style={{ padding: "10px" }}>
        <img
          src={props.imageUrl}
          style={{ width: "75px", height: "75px" }}
          alt={props.title}
        />
      </td>
      <td style={{ padding: "10px" }}>{props.title}</td>
      <td style={{ padding: "10px" }}>$ {props.price}</td>
      <td style={{ padding: "10px" }}>
        <input
          type="number"
          id={`quantity-${props.id}`}
          value={props.quantity}
          min="1"
          max="10"
          onChange={(event) => updateQuantity(props.id, +event.target.value)}
        />
      </td>
      <td style={{ padding: "10px" }}>
        <Button variant="danger" onClick={props.onRemove}>
          Remove
        </Button>
      </td>
    </tr>
  );
};
export default CartItem;
