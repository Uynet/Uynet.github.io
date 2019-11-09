import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { main, menubar, itemColor } from "../utils/colors.js";
import item from "./item.js";

const s = {
  title: {
    fontSize: 20,
    // fontFamily: "honoka",
    background: menubar,
    fontWeight: "bold",
    color: itemColor
  },
  card: {
    position: "relative",
    cursor: "pointer",
    backgroundSize: "cover",
    backgroundPosition: "center center"
  }
};

class WorkModal extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  handleClick = e => {
    this.ref.current.toggleOpen();
  };
  render() {
    return (
      <React.Fragment>
        <div
          className={this.props.classes.card}
          style={{
            backgroundImage: "url(" + this.props.imgurl + ")",
            height: "50vmax",
            maxHeight: "90%"
          }}
        />
        <div className={this.props.classes.title}>{this.props.name}</div>
        <div></div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(WorkModal);
