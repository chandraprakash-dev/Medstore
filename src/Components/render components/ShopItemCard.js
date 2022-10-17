import React from "react";
import {Link} from "react-router-dom";
import './shopItemCard.css';

function ShopItemCard(props) {

  return (
    <div className="shop-card">
      <div className="heading">
        <Link to={`shop/${props.item.name}`} className="itemName">
          <h3>{props.item.name}</h3>
        </Link>
      </div>
      <div className="price">
        <p>&#x20B9; {props.item.mrp}</p>
      </div>
      <p>{props.item.stock}</p>
      <p>{props.item.Fact_Box}</p>
    </div>
  )
}

export default ShopItemCard;
