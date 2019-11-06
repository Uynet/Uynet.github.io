import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./home.js";
import About from "./about.js";
import Works from "./works.js";
import Blog from "./blog.js";

const App = () => (
  <React.Fragment>
    <Router>
      <Link to="/"></Link>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Works" component={Works} />
        <Route exact path="/Blog" component={Blog} />
      </Switch>
    </Router>
  </React.Fragment>
);

export default App;
