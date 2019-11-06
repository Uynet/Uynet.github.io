import React from "react";
import { withStyles } from "@material-ui/core/styles";

const main = "#FF165C";

const width = 220;
const s = {
  open: {
    background: main,
    width: width,
    height: "100vh",
    position: "fixed",
    top: 0,
    left: "calc(100vw - " + width + "px)"
  },
  closed: {
    background: main,
    width: width,
    height: "100vh",
    position: "fixed",
    top: 0,
    left: "calc(100vw)"
  }
};

// 右にでてくる
class Menubar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  toggleOpen = e => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const className = this.state.isOpen
      ? this.props.classes.open
      : this.props.classes.closed;
    return (
      <React.Fragment>
        <div className={className}></div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Menubar);
