import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { item as itemClass, underline } from "./style/item.module.scss";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const s = {};

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick = e => {};
  render() {
    return (
      <React.Fragment>
        <Router>
          <Link to={this.props.link}>
            <div className={itemClass} onClick={this.onClick}>
              <div>{this.props.name}</div>
              <div className={underline} style={{ background: "#fff" }}></div>
            </div>
          </Link>
        </Router>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Item);
