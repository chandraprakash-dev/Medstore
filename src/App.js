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

  useEffect(() => {
    fetchItems();
  }, [])

  const fetchItems = async () => {
    const data = await fetch('http://34.172.110.61/it-patch-mgmt/medicines/list');
    const items = await data.json();
    setShopItems(items)
  }

  const addToCart = (id) => {
    const shopItem = shopItems.filter(item => item.itemId === id)[0];

    console.log(shopItem);
    shopItem.quantity = 1;
    setCartItems([...cartItems, shopItem]);
  }

  const updateCart = (index, op) => {
    console.log('in update');
    const newCartItems = cartItems.slice();
    const newCartItem = newCartItems[index];

    const quantity = op === '+' ? newCartItem.quantity + 1 : newCartItem.quantity - 1;

    // delete item from cartItems if quantity is 0.
    if (quantity === 0) newCartItems.splice(index, 1);
    else newCartItem.quantity = quantity;

    setCartItems(newCartItems);
  }

  const clearCart = () => {
    console.log('in the clear');
    setCartItems([]);
  }

  const cartCount = cartItems.reduce((acc, cur) => acc + cur.quantity, 0);
  const total = cartItems.reduce((acc, cur) => acc + (cur.quantity * cur.item.cost), 0)

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Dashboard}/>
        <Route path="/Medstore" component={Dashboard}/>
        <Route exact path="/shop">
          <Shop
            shopItems={shopItems}
            cartItems={cartItems}
            addToCart={addToCart}
            updateCart={updateCart}
          />
        </Route>
        <Route path="/shop/:name" render={(props) => (
          <ShopItemDetails
            {...props}
            cartItems={cartItems}
            addToCart={addToCart}
            updateCart={updateCart}
          />
        )}/>
        <Route path="/lab" component={Construction}/>
        <Route path="/doctor" component={Construction}/>
        <Route path="/cart">
          <Cart
            cartItems={cartItems}
            total={total}
            updateCart={updateCart}
          />
        </Route>
      </Switch>
      <Footer cartCount={cartCount}/>
    </Router>
  );
}

export default App;
