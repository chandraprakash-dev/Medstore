import React from "react";
import './cartItemCard.css';

function CartItemCard(props) {
  return (
    <div className="cart-card">
      <div className="itemInfo">
        <p>{props.values.name}</p>
      </div>
      <p>Rs. {props.values.mrp}</p>
      <p>{props.values.quantity}</p>
      <p>{props.values.quantity * props.values.mrp}</p>
    </div>
  )
}

export default CartItemCard;
