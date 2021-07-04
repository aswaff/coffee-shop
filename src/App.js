
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React, { useState, useContext, useEffect } from 'react';

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
  useEffect(() => localStorage.setItem('cartStorage', JSON.stringify(cartList)));
  const [cartList, setCartList] = useState(
    localStorage.getItem('cartStorage')
  );
  const cartValue =  { cartList, setCartList };

  

  return (
    
    <Router>
      <div className="App">
        <NavBar />
        <CartContext.Provider value={cartValue}>
        <Switch>
        
            <Route path="/cart">
              <Cart />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/order">
              
                <Order />
              
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
            
          </Switch>
          </CartContext.Provider>
      {/* {console.log(store)} */}
      </div>

    </Router>
  );

}

export default App;
