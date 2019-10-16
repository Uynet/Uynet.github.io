import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./home.js";

const App = () => (
  <React.Fragment>
    <Router>
      <Link to="/"></Link>
      <Switch>
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
