import React from "react";
import { withStyles } from "@material-ui/core/styles";

const s = {};

const base = "#FFCBD1";
const main = "#e2146a";
const accent = "#FFDF6F";
const hilight = "#6F16FF";

class BGEffect extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="sideline leftside"></div>
        <div className="sideline rightside"></div>
        <div className="sideline leftside"></div>
        <div className="BGCircle1"></div>
        <div className="BGCircle2"></div>
        <div className="BGCircle3"></div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(BGEffect);
