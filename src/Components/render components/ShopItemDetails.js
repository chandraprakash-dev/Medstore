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

  const handleQuantityChange= (e) => {
    setQuantity(e.target.value);
  }

  const [quantity, setQuantity] = useState(1);
  const quantityComponent = itemIndex >= 0 ?
    <div>
      <div>
        <Link to="/cart">
          <button>Go to cart</button>
        </Link>
      </div>
    </div>
    :
    <div>
      <label htmlFor="quantity">Quantity</label>
      <select value={quantity} onChange={handleQuantityChange} id="quantity" name="quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button onClick={() => props.addToCart(item, quantity)}>Add to cart</button>
    </div>

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
