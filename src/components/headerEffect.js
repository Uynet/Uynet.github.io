import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { main, menubar } from "../utils/colors.js";

const s = {};

class HeaderEffect extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <React.Fragment>
        <div
          className={className}
          style={{ animationDelay: "0.4s", background: main }}
        ></div>
        <div
          className={className}
          style={{ animationDelay: "0.5s", background: this.props.color }}
        ></div>
        <div
          className={className}
          style={{ animationDelay: "0.6s", background: menubar }}
        ></div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(HeaderEffect);
