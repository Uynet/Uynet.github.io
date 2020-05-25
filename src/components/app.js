import React from "react";
//import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./home.js";
import Profile from "./profile.js";
import Works from "./works.js";
import Contact from "./contact.js";
import Blog from "./blog.js";
import Menubar from "./menubar.js";
import Hamberger from "./hambarger.js";
import LoadAll from "./loadAll.js";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";

library.add(fab, fas, far);

class App extends React.Component {
  constructor(props) {
    super(props);
    let path = "/#/" + window.location.href.split("/").pop();
    const k =
      path === "/#/" ||
      path === "/#/profile" ||
      path === "/#/works" ||
      path === "/#/contact" ||
      path === "/#/blog";
    this.state = { path: path, onLoading: true };
    this.menubar = React.createRef();
    this.hambar = React.createRef();
    if (!k) {
      window.location.assign("/");
    }
  }
  onLoadCompleted = () => {
    this.setState({ onLoading: false });
  };
  toggleMenubar = path => {
    this.menubar.current.toggleOpen();
    this.hambar.current.toggleOpen();
    if (path) this.router(path);
  };
  router = path => {
    if (path === "top") path = "";
    path = "/#/" + path;
    this.setState({ path: path });
    window.scrollTo(0, 0);
  };
  render() {
    return (
      <React.Fragment>
        {/*
          <Router>
            <Switch>
              <Route exact path="/" />
              <Route exact path="/profile" />
              <Route exact path="/works" />
              <Route exact component={NotFound} />
            </Switch>
          </Router>
        */}
        {this.state.onLoading ? (
          <LoadAll
            style={{
              overflow: "hidden"
            }}
            onLoadCompleted={this.onLoadCompleted}
          />
        ) : (
          <>
            <Hamberger ref={this.hambar} onClick={this.toggleMenubar} />
            <Menubar ref={this.menubar} update={this.toggleMenubar} />
            {this.state.path === "/#/" && <Home />}
            {this.state.path === "/#/profile" && <Profile />}
            {this.state.path === "/#/works" && <Works />}
            {this.state.path === "/#/contact" && <Contact />}
            {this.state.path === "/#/blog" && <Blog />}
          </>
        )}
      </React.Fragment>
    );
  }
}
/*
const NotFound = () => {
  return <div>404 Not Found</div>;
};
*/

export default App;
