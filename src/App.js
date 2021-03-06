import React from "react";
import { Home, Cart, AddProduct, Checkout } from "../src/pages/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "../src/context/products"
const App = () => {
  return (
    <Router>
      <Product>
        <React.Fragment>
          <Route exact path='/' component={() => <Home />} />
          <Route exact path='/cart' component={() => <Cart />} />
          <Route exact path='/addproducts' component={() => <AddProduct />} />
          <Route exact path='/checkout' component={() => <Checkout />} />
        </React.Fragment>
      </Product>
    </Router>

  );
};

export default App;
