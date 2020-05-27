import React from "react";
import { Home, Cart } from "../src/pages/index";
import { BrowserRouter as Router, Route } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <React.Fragment>
        <Route exact path='/' component={() => <Home />} />
        <Route exact path='/cart' component={() => <Cart />} />
      </React.Fragment>
    </Router>

  );
};

export default App;
