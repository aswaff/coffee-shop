
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import { NavBar } from './components/navbar/navbar.component'
import { HomePage } from './pages/homepage/homepage.component'
import { About } from './pages/about/about.component'
import { Order } from './pages/order/order.component'
import { Cart } from './pages/cart/cart.component'
import store from "./redux/store";

function App() {
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
              <Order />
            </Route>
            <Route path="/">
              <HomePage />
            </Route>
          </Switch>
      {console.log(store)}
      </div>

    </Router>
  );

}

export default App;
