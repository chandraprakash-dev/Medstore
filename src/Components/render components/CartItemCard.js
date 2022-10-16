import React, {useEffect, useState} from "react";
import './cartItemCard.css';

function CartItemCard(props) {
  console.log(props);
  const [item, setItem] = useState();
  useEffect(() => {
    fetchItem();
  }, [])

  const cartItems = props.cartItems;
  const id = props.values.itemId;

  const itemIndex = cartItems.findIndex(cartItem => cartItem.itemId === id);
  console.log(itemIndex);
  const cartItem = cartItems[itemIndex];

  const fetchItem = async () => {
    const data = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${id}`, {mode: 'cors'});
    const response = await data.json();
    const item = response.data;

    console.log(item);
    setItem(item);
  }

  const imageDiv = item ? <img src={item.item.images.icon} alt={item.name}/> : null;

  return (
    <div className="cart-card">
      <div className="itemInfo">
        <div className="cartImage">
          {imageDiv}
        </div>
        <p>{props.values.item.name}</p>
      </div>
      <p>Rs. {props.values.item.cost}</p>
      <div className="changeQuantity">
        <button onClick={() => props.updateCart(itemIndex, '-')}>-</button>
        <p>{cartItem.quantity}</p>
        <button onClick={() => props.updateCart(itemIndex, '+')}>+</button>
      </div>

      <p>{cartItem.quantity * props.values.item.cost}</p>
    </div>
  )
}

export default CartItemCard;
