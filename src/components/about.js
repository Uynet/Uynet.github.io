import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BGEffect from "./BGEffect";

const base = "#fad8e4";
const main = "#e2146a";
const accent = "#FFDF6F";
const hilight = "#6F16FF";

const s = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: 0,
    background: main,
    animation: "swipeY cubic-bezier(0, 1, 0, 1) 2.6s 0.4s forwards"
  },
  title: {
    position: "relative",
    width: 124,
    margin: "auto",
    textAlign: "center",
    align: "center",
    padding: 64
  },
  titleString: {
    textAlign: "center",
    fontFamily: "gkktt",
    fontSize: 30,
    color: accent
  },
  underLine: {
    height: 8,
    borderRadius: 4,
    background: accent,
    animation: "swipeX cubic-bezier(0.99, 0.01, 0, 1) 1.6s forwards"
  },
  icon: {
    position: "absolute",
    borderRadius: "50%",
    transform: "translate(-50%,-50%)",
    top: 170,
    left: 0,
    right: 0,
    width: 0,
    height: 0,
    zIndex: 5,
    margin: "auto",
    animation: "iconPop cubic-bezier(0, 1, 0, 1) 2.6s 1.3s forwards"
  }
};

class About extends React.Component {
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
        <BGEffect />
        <div className={this.props.classes.header}></div>
        <div className={this.props.classes.title}>
          <div className={this.props.classes.titleString}>>>>>>>> About</div>
          <div className={this.props.classes.underLine}></div>
        </div>
        <img
          src="/resource/img/icon.png"
          className={this.props.classes.icon}
        ></img>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(About);
