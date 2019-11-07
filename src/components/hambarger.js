import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { base, main } from "../utils/colors.js";

const s = {
  time: {
    position: "absolute",
    right: 40,
    top: 16,
    zIndex: 10
  },
  bar: {
    position: "absolute",
    right: 40,
    top: 16,
    zIndex: 10,
    animation: "hambergerDrop",
    animationTimingFunction: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    animationFillMode: "both"
  }
};

class Hamberger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, isFirstTime: true };
  }
  toggleOpen = e => {
    this.setState({ isOpen: !this.state.isOpen, isFirstTime: false });
  };
  render() {
    const color = this.state.isOpen ? base : main;
    const content = this.state.isOpen ? "times" : "bars";
    const className = this.state.isOpen
      ? this.props.classes.time
      : this.props.classes.bar;
    return (
      <React.Fragment>
        <div
          className={className}
          style={{
            animationDelay: this.state.isFirstTime ? "0.8s" : "0s",
            animationDuration: this.state.isFirstTime ? "0.7s" : "0s"
          }}
        >
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 0,
              borderStyle: "solid",
              borderWidth: 2,
              cursor: "pointer",
              background: this.state.isOpen ? main : base,
              borderColor: color
            }}
            onClick={e => this.props.onClick(null)}
          >
            <div
              style={{
                position: "absolute",
                color: color,
                fontSize: 18,
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                margin: "0 auto"
              }}
            >
              <FontAwesomeIcon icon={["fas", content]}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Hamberger);
