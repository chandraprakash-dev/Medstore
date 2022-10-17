import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import './shopItemCard.css';

function ShopItemCard(props) {
  const [item ,setItem] = useState();
  useEffect(() => {
    fetchItem();
  }, [])

  const name = props.values.name;

  const fetchItem = async () => {
    const data = await fetch(`http://34.172.110.61/it-patch-mgmt/medicines/find?medicineName=${name}`);
    const item = await data.json();

    console.log(item);
    setItem(item);
  }

  if(!item) {
    return(
      <div>
        <p>Loading...</p>
      </div>
    )
  }

  return (
    <div className="shop-card">
      <div className="heading">
        <Link to={`shop/${name}`} className="itemName">
          <h3>{props.values.name}</h3>
        </Link>
      </div>
      <div className="price">
        <p>&#x20B9; {props.values.mrp}</p>
      </div>
      <p>{props.values.stock}</p>
      <p>{props.values.Fact_Box}</p>
    </div>
  )
}

export default ShopItemCard;
