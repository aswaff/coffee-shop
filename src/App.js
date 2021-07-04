
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useState, useContext } from 'react';

import './App.css';
import { NavBar } from './components/navbar/navbar.component'
import { HomePage } from './pages/homepage/homepage.component'
import { About } from './pages/about/about.component'
import { Order } from './pages/order/order.component'
import { Cart } from './pages/cart/cart.component'
// import store from "./redux/store";
// const CartContext = React.createContext(null);
import {CartContext} from "./cartContext";

function App() {
  const [cartList, setCartList] = useState([]);
  const cartValue =  { cartList, setCartList };

  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/order">
              <CartContext.Provider value={cartValue}>
              <Order />
              </CartContext.Provider>
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
      {/* {console.log(store)} */}
      </div>

    </Router>
  );

}

export default App;
