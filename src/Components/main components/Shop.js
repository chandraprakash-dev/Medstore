import React, {useState} from "react";
import ShopItemCard from "../render components/ShopItemCard";
import './Shop.css';
import OrderCard from "../render components/OrderCard";

function Shop(props) {
  const {shopItems} = props;
  console.log(shopItems);
  const [searchItems, setSearchItems] = useState([]);

  function search(e) {
    const {value} = e.target;
    console.log(value, !value);
    if (!value) {
      setSearchItems([]);
      return;
    }
    const searchItems = shopItems.filter(item => item.name.toLowerCase().includes(value.toLowerCase()));
    console.log(shopItems);
    setSearchItems(searchItems);
  }

  const shopItemCards = searchItems.map(item => {
    return <ShopItemCard
      key={item.id}
      id={item.id}
      item={item}
    />
  });

  const {orders} = props;
  const orderCards = orders.map(order => <OrderCard key={order.orderId} order={{id:order.orderId, list: order.medicineList}}/>)

  return (
    <div className="shop">
      <div className="search">
        <label htmlFor="search-bar">Search</label>
        <input type="text" id="search-bar" className="search-bar" onChange={search}/>
      </div>
      <div className="transactions">
        <p className="heading">Previous orders</p>
        <div className="transactions-list">
          {orderCards}
        </div>
      </div>
      <div className="shopList">
        {shopItemCards}
      </div>
    </div>
  )

}

export default Shop;
