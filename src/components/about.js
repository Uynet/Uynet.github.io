import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BGEffect from "./BGEffect";
import { NONAME } from "dns";

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
    //borderBottomColor: accent,
    //borderBottom: "solid 5px"
  },
  myname: {
    color: hilight,
    fontSize: 40,
    fontFamily: "gkktt",
    position: "absolute",
    top: 200,
    left: 150,
    opacity: 0,
    animation: "myname ease 0.9s 1.5s forwards"
  },
  title: {
    position: "relative",
    width: 244,
    top: 64,
    left: 32
  },
  titleString: {
    fontFamily: "gkktt",
    fontSize: 80,
    color: base
  },
  underLine: {
    height: 8,
    borderRadius: 4,
    background: base,
    left: 0,
    right: 0,
    margin: "auto",
    animation: "swipeX cubic-bezier(0.99, 0.01, 0, 1) 1.6s forwards"
  },
  icon: {
    position: "absolute",
    borderRadius: "50%",
    transform: "translate(-50%,-50%)",
    top: 270,
    left: 120,
    // right: 0,
    width: 0,
    height: 0,
    zIndex: 5,
    opacity: 0,
    margin: "auto",
    animation: "iconPop cubic-bezier(0, 1, 0, 1) 2.6s 1.3s forwards",
    border: "solid 5px",
    borderColor: main
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
          <div className={this.props.classes.titleString}>About</div>
          <div className={this.props.classes.myname}>uynet</div>
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
