import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from "./Components/additional components/Header"
import Footer from "./Components/additional components/Footer";
import Construction from "./Components/additional components/Construction";

import Dashboard from "./Components/main components/Dashboard";
import Shop from "./Components/main components/Shop";
import Cart from "./Components/main components/Cart";

import ShopItemDetails from "./Components/render components/ShopItemDetails";

function App() {
  const [shopItems, setShopItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetchItems().then(items => setShopItems(items));
    fetchOrders().then(orders => setOrders(orders));
  }, [])

  const fetchOrders = async () => {
    const data = await fetch('http://34.172.110.61/it-patch-mgmt/order/get-orders');
    let orders = await data.json();
    orders = orders.filter(order => order.medicineList.length > 0)
    let count = 1;
    orders.forEach(order => {
      order.orderId = count++;
    });
    orders.pop();
    return orders;
  }

  const fetchItems = async () => {
    const data = await fetch('http://34.172.110.61/it-patch-mgmt/medicines/list');
    const items = await data.json();
    return items;
  }

  const addToCart = (item, quantity) => {
    if (document.getElementById("prescription").value == "") {
      alert("You need to attach prescription to order this medicine");
      return false;
    }

    item.quantity = quantity;
    let newItems = cartItems.slice();

    let flag = false;
    for (let i = 0; i < newItems.length; i++) {
      if (item.id === newItems[i].id) {
        newItems[i].quantity = quantity;
        flag = true;
        break;
      }
    }
    if (!flag) newItems.push(item);
    setCartItems(newItems);
  }

  const cartCount = cartItems.reduce((acc, cur) => acc + +cur.quantity, 0);
  const total = cartItems.reduce((acc, cur) => acc + (cur.quantity * cur.mrp), 0)

  if (shopItems.length === 0 || orders.length === 0) {
    return (
      <div className="initial">
        <p>Initializing App...</p>
      </div>
    )
  }

  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/">
          <Dashboard
            orders={orders}
          />
        </Route>
        <Route exact path="/Medstore">
          <Dashboard
            orders={orders}
          />
        </Route>
        <Route exact path="/shop">
          <Shop
            shopItems={shopItems}
            orders={orders}
          />
        </Route>
        <Route path="/shop/:name" render={(props) => (
          <ShopItemDetails
            {...props}
            addToCart={addToCart}
          />
        )}/>
        <Route path="/lab" component={Construction}/>
        <Route path="/doctor" component={Construction}/>
        <Route path="/cart">
          <Cart
            cartItems={cartItems}
            total={total}
          />
        </Route>
      </Switch>
      <Footer cartCount={cartCount}/>
    </Router>
  );
}

export default App;
