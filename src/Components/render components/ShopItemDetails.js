import React, {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import './ShopItemDetails.css';

function ShopItemDetails(props) {
  const [item, setItem] = useState();
  useEffect(() => {
    fetchItem();
  }, [])

  const cartItems = props.cartItems;
  const name = props.match.params.name;

  const itemIndex = cartItems.findIndex(cartItem => cartItem.name === name);
  const cartItem = cartItems[itemIndex];

  const quantityComponent = itemIndex >= 0 ?
    <div>
      <button onClick={() => props.updateCart(itemIndex, '-')}>-</button>
      <p>{cartItem.quantity}</p>
      <button onClick={() => props.updateCart(itemIndex, '+')}>+</button>
      <div>
        <Link to="/cart">
          <button>Go to cart</button>
        </Link>
      </div>
    </div> :
    <button>Add to cart</button>;


  const fetchItem = async () => {
    const data = await fetch(`http://34.172.110.61/it-patch-mgmt/medicines/find?medicineName=${props.match.params.name}`);
    const response = await data.json();
    const item = response[0];
    console.log(item);
    setItem(item);
  }

  if (!item) {
    return (
      <div className="details">
        <p>Loading...</p>
      </div>
    )
  }
  return (
    <div className="details">
      <div className="heading">
        <h3>{name}</h3>
      </div>
      <div className="price">
        <p>&#x20B9; {item.mrp}</p>
      </div>
      <p>{item.name}</p>
      <p>{item.Fact_Box}</p>
      {quantityComponent}
    </div>
  )
}

export default ShopItemDetails;
