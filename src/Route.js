import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Product from './components/Products';
import ProductItems from './components/ProductItems';
import Navbar from './components/Navbar';

function RouteConfig() {
  return (
    <div className="">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route exact path="/products" component={Product} />
          <Route exact path="/product/:id" component={ProductItems} />
          <Route exact path="*" component={() => <h2> Page Not Found .. </h2>} />
        </Switch>
      </Router>
    </div>
  );
}
 
export default RouteConfig;
