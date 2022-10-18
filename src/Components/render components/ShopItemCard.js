import React from "react";
import {Link} from "react-router-dom";

import './shopItemCard.css';

function ShopItemCard(props) {

  return (
    <div className="shop-card">
      <Link to={`shop/${props.item.name}`} className="itemName">
        <h3>{props.item.name}</h3>
      </Link>
      <p>&#x20B9; {props.item.mrp}</p>
      <p>{props.item.stock}</p>
    </div>
  )
}

export default ShopItemCard;
