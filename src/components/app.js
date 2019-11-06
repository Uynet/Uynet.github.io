import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./home.js";
import About from "./about.js";
import Works from "./works.js";
import Blog from "./blog.js";
import Menubar from "./menubar.js";
import Hamberger from "./hambarger.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  handleClick = e => {
    this.ref.current.toggleOpen();
  };
  render() {
    return (
      <React.Fragment>
        <Hamberger onClick={this.handleClick} />
        <Menubar ref={this.ref} />
        <Router>
          <Link to="/"></Link>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/works" component={Works} />
            <Route exact component={NotFound} />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}
const NotFound = () => {
  return <div>404 Not Found</div>;
};

export default App;
