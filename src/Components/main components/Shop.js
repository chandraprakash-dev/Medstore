import React, {useState} from "react";
import {Link} from "react-router-dom";
import ShopItemCard from "../render components/ShopItemCard";
import './Shop.css';

function Shop(props) {
  const {cartItems, shopItems} = props;
  const [searchItems, setSearchItems] = useState([]);

  function search(e) {
    const {value} = e.target;
    const searchItems = shopItems.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    setSearchItems(searchItems);
  }

  const shopItemCards = searchItems.map(item => {
    console.log(item);
    return <ShopItemCard
      key={item.id}
      id={item.id}
      values={
        {
          name: item.name,
          mrp: item.mrp,
          stock: item.stock,
          Fact_Box: item.Fact_Box
        }
      }
      cartItems={cartItems}
      updateCart={props.updateCart}
      addToCart={props.addToCart}
    />
  });

  const links = Array.isArray(cartItems) && cartItems.length ?
    <div className="shopLinks">
      <Link to="/cart">
        <button>Go to cart</button>
      </Link>
    </div> : null

  return (
    <div className="shop">
      {links}
      <div className="search">
        <label htmlFor="search-bar">Search</label>
        <input type="text" id="search-bar" className="search-bar" onChange={search}/>
        <i className="fa fa-search" aria-hidden="true"></i>
      </div>
      <div className="shopList">
        {shopItemCards}
      </div>
      <div className="last-ordered">
        <p>Previous orders</p>
        <div className="latest-orders">
          <p>Order 1</p>
          <p>Order 1</p>
          <p>Order 1</p>
        </div>
      </div>
    </div>
  )

}

export default Shop;
