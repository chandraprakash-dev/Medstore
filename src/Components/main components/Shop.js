import React, {useState} from "react";
import ShopItemCard from "../render components/ShopItemCard";
import './Shop.css';

function Shop(props) {
  const {shopItems} = props;
  const [searchItems, setSearchItems] = useState([]);

  function search(e) {
    const {value} = e.target;
    const searchItems = shopItems.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    setSearchItems(searchItems);
  }

  const shopItemCards = searchItems.map(item => {
    return <ShopItemCard
      key={item.id}
      id={item.id}
      item={item}
    />
  });

  return (
    <div className="shop">
      <div className="search">
        <label htmlFor="search-bar">Search</label>
        <input type="text" id="search-bar" className="search-bar" onChange={search}/>
        <i className="fa fa-search"/>
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
