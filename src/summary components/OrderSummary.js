import React from "react";
import './OrderSummary.css';

function OrderSummary(props) {
  const items = props.cartItems.map(item => <tr key={item.itemId}>
    <td>{item.item.name}</td>
    <td>{item.item.cost}</td>
    <td>{item.quantity}</td>
    <td>{item.item.cost * item.quantity}</td>
  </tr>)

  return(
    <div className="orderSummary">
      <table>
        <tbody>
        <tr>
          <th>Item</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
        {
          items
        }
        <tr>
          <td colSpan="3">Total</td>
          <td> {props.total}</td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}

export default OrderSummary;
