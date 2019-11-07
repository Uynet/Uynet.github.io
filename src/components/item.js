import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  item as itemClass,
  underline,
  headline
} from "./style/item.module.scss";
import { BrowserRouter as Router, Link } from "react-router-dom";
import { base, main, accent } from "../utils/colors.js";

const s = {};

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
    this.props.update(this.props.name.toLowerCase());
    console.log(this.props.name.toLowerCase());
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
