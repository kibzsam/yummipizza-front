import React from "react";
import { Home, Cart, AddProduct } from "../src/pages/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Product from "../src/context/products"
const App = () => {
  return (
    <Product>
      <Router>
        <React.Fragment>
          <Route exact path='/' component={() => <Home />} />
          <Route exact path='/cart' component={() => <Cart />} />
          <Route exact path='/addproducts' component={() => <AddProduct />} />
        </React.Fragment>
      </Router>
    </Product>
  );
};

export default App;
