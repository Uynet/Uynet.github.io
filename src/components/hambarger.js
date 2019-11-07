import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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

const base = "#FFCBD1";
const main = "#FF165C";

class Hamberger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false, isFirstTime: true };
  }
  onClick = e => {
    this.setState({ isOpen: !this.state.isOpen, isFirstTime: false });
    this.props.onClick();
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
            animationDelay: this.state.isFirstTime ? "1.3s" : "0s",
            animationDuration: this.state.isFirstTime ? "0.7s" : "0s"
          }}
        >
          <div
            style={{
              width: 62,
              height: 62,
              borderRadius: 0,
              borderStyle: "solid",
              borderWidth: 2,
              cursor: "pointer",
              borderColor: color
            }}
            onClick={this.onClick}
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
