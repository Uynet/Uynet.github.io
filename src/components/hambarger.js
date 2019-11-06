import React from "react";
import { withStyles } from "@material-ui/core/styles";

const s = {};

class Hamberger extends React.Component {
  render() {
    console.log(this.ref);
    return (
      <React.Fragment>
        <div onClick={this.props.onClick}>ぽ</div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Hamberger);
