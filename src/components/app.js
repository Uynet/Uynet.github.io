import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./home.js";
import About from "./about.js";
import Works from "./works.js";
import Menubar from "./menubar.js";
import Hamberger from "./hambarger.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
library.add(fab, fas, far);

class App extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  handleClick = e => {
    this.ref.current.toggleOpen();
  };
  onUpdate = () => {
    this.render();
  };
  render() {
    console.log("up");
    return (
      <React.Fragment>
        <Hamberger onClick={this.handleClick} />
        <Menubar ref={this.ref} update={this.onUpdate} />
        <Router>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/works" component={Works} />
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
