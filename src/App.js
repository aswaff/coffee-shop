
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

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />



        <Switch>
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

      </div>

    </Router>
  );

}

export default App;
