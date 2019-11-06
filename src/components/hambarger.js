import React from "react";
import { withStyles } from "@material-ui/core/styles";

const s = {};

class Hamberger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  onClick = e => {
    this.setState({ isOpen: !this.state.isOpen });
    this.props.onClick();
  };
  render() {
    console.log(this.ref);
    return (
      <React.Fragment>
        <div style={{ position: "absolute", top: 20, right: 40, zIndex: 10 }}>
          <div onClick={this.onClick}>{this.state.isOpen ? "x" : "三"}</div>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Hamberger);
