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
    this.menubar = React.createRef();
    this.hambar = React.createRef();
  }
  toggleMenubar = e => {
    this.menubar.current.toggleOpen();
    this.hambar.current.toggleOpen();
  };
  render() {
    return (
      <React.Fragment>
        <Hamberger ref={this.hambar} onClick={this.toggleMenubar} />
        <Menubar ref={this.menubar} update={this.toggleMenubar} />
        <Router>
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
