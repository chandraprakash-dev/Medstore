import React from "react";
import './cartItemCard.css';

function CartItemCard(props) {
  return (
    <div className="cart-card">
      <p>{props.values.name}</p>
      <p>Rs. {props.values.mrp}</p>
      <p>{props.values.quantity}</p>
      <p>{props.values.quantity * props.values.mrp}</p>
    </div>
  )
}

export default CartItemCard;
