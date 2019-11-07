import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { base, main, accent, hilight, font } from "../utils/colors.js";

const s = {
  frame: {
    background: "#fff",
    margin: "20px 100px",
    padding: "20px 20px",
    opacity: 0,
    color: font,
    animation: "fadeIn  ease 0.6s forwards"
  }
};

class Box extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  getDelay = () => {
    return "2.0s";
  };
  render() {
    const { title, content } = this.props.box;
    return (
      <React.Fragment>
        <div
          className={this.props.classes.frame}
          style={{ animationDelay: this.getDelay() }}
        >
          <div className={this.props.classes.title}>{title}</div>
          <div>{content}</div>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Box);
