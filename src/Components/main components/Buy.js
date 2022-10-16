import React from "react";
import {Link} from "react-router-dom";
import AddressCard from "../render components/AddressCard";
import './Buy.css';

function Buy(props) {
  const addressCards = props.addresses.map((address, index) =>
    <AddressCard
      key={index}
      index={index}
      address={address}
      selectAddress={props.selectAddress}
      handleChange={props.handleChange}
    />)

  return (
    <div className="buy">
      <h2>Select a delivery address</h2>
      <div className="addresses">
        {addressCards}
      </div>
      <form name="addressForm">
        <label>
          <input name="address" placeholder="Enter your address"/>
        </label>
        <button onClick={props.addAddress}>+ Add new address</button>
      </form>
      <Link to="/cart">
        <button>Cancel and go back to cart</button>
      </Link>
    </div>
  )
}

export default Buy;
