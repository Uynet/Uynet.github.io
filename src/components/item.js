import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  item as itemClass,
  underline,
  headline
} from "./style/item.module.scss";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const s = {};

const base = "#FFCBD1";
const main = "#e2146a";
const accent = "#FFDF6F";
const hilight = "#6F16FF";

class Item extends React.Component {
  constructor(props) {
    super(props);
    let filename =
      window.location.href
        .split("/")
        .pop()
        .toUpperCase() || "TOP";
    const isCurrentLoc = filename === this.props.name.toUpperCase();
    this.state = { onHover: false, isCurrentLoc: isCurrentLoc };
  }
  onMouseEnter = e => {
    this.setState({ onHover: true });
  };
  onMouseLeave = e => {
    this.setState({ onHover: false });
  };
  onClick = e => {
    this.props.update();
  };
  render() {
    const color = this.state.onHover
      ? main
      : this.state.isCurrentLoc
      ? "#FFF"
      : base;
    return (
      <React.Fragment>
        <Router>
          <Link
            to={this.props.link}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
          >
            <div
              className={itemClass}
              onClick={this.onClick}
              style={{ color: color }}
            >
              <div>{this.props.name}</div>
              <div className={underline} style={{ background: color }}></div>
              {this.state.isCurrentLoc && (
                <div className={headline} style={{ background: accent }}></div>
              )}
            </div>
          </Link>
        </Router>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Item);
