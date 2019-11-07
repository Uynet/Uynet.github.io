import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BGEffect from "./BGEffect";
import { base, main, accent, hilight, font } from "../utils/colors.js";

const bio =
  "日本国憲法を尊重するのが趣味です。普段は日本国家に所属していて、消費税や国民年金を納めています。選挙権を持っていて、労働が義務です。資本主義が好きなみんなと繋がりたい！";

const s = {
  space: { height: 240 },
  bio: {
    color: font,
    padding: "40px 140px",
    fontSize: 20,
    opacity: 0,
    animation: "fadeIn  ease 0.2s 1.7s forwards"
  },
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
    color: main,
    fontSize: 40,
    fontFamily: "gkktt",
    position: "absolute",
    top: 200,
    left: 180,
    opacity: 0,
    animation: "myname ease 0.9s 1.4s forwards"
  },
  title: {
    position: "relative",
    width: 244,
    textAlign: "center",
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
    left: 140,
    // right: 0,
    width: 0,
    height: 0,
    zIndex: 5,
    opacity: 0,
    margin: "auto",
    animation: "iconPop cubic-bezier(0, 1, 0, 1) 2.6s 1.1s forwards",
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
        <div className={this.props.classes.space}></div>
        <div className={this.props.classes.bio}>{bio}</div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(About);
