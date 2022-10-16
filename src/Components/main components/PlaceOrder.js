import React from "react";
import {Link} from "react-router-dom";
import OrderSummary from "../../summary components/OrderSummary";
import PaymentSummary from "../../summary components/PaymentSummary";
import AddressSummary from "../../summary components/AddressSummary";
import './PlaceOrder.css';

function PlaceOrder(props) {
  return (
    <div className="placeOrder">
      <Link to="/payment">
        <i className="fas fa-arrow-left"></i>
      </Link>

      <h2>Place your order</h2>
      <OrderSummary
        cartItems={props.cartItems}
        total={props.total}
      />
      <PaymentSummary payment={props.payment}/>
      <AddressSummary address={props.address}/>

      <Link to="/cart">
        <button>Cancel and go to cart</button>
      </Link>

      <Link to="/confirmation">
        <button onClick={props.clearCart}>Place order and pay</button>
      </Link>

    </div>
  )
}

export default PlaceOrder;
