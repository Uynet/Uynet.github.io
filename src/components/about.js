import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BGEffect from "./BGEffect";
import {
  base,
  main,
  mynameColor,
  font,
  menubar,
  accent,
  menubar2
} from "../utils/colors.js";
import Box from "./box.js";

const bio =
  "日本国憲法を尊重するのが趣味です。普段は日本国家に所属していて、消費税や国民年金を納めています。選挙権を持っていて、労働が義務です。資本主義が好きなみんなと繋がりたい！";

const box1 = { title: "説明", content: "ここに説明を入れる" };

const s = {
  space: { height: 240 },
  footerSpace: { height: 60 },
  bio: {
    color: font,
    padding: "30px 10%",
    fontSize: 15,
    opacity: 0,
    animation: "fadeIn  ease 0.6s 1.7s forwards"
  },
  header: {
    position: "absolute",
    zIndex: 2,
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
    color: mynameColor,
    fontSize: 40,
    fontFamily: "gkktt",
    position: "absolute",
    top: 210,
    left: 180,
    opacity: 0,
    animation: "myname ease 0.9s 1.4s forwards"
  },
  sub: {
    color: font,
    fontSize: 20,
    fontFamily: "Nico Moji",
    position: "absolute",
    top: 200,
    left: 190,
    opacity: 0,
    animation: "myname ease 0.9s 1.4s forwards"
  },
  title: {
    zIndex: 2,
    position: "relative",
    width: 244,
    textAlign: "center",
    top: 64,
    left: 32
  },
  titleString: {
    zIndex: 2,
    fontFamily: "gkktt",
    fontSize: 80,
    color: accent
  },
  underLine: {
    zIndex: 2,
    height: 8,
    borderRadius: 4,
    background: menubar2,
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
    animation: "iconPop ease  0.4s 1.1s forwards",
    border: "solid 5px",
    borderColor: base
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
        <div
          className={this.props.classes.header}
          style={{ animationDelay: "0.4s", background: main }}
        ></div>
        <div
          className={this.props.classes.header}
          style={{ animationDelay: "0.5s", background: "#30FFE0" }}
        ></div>
        <div
          className={this.props.classes.header}
          style={{ animationDelay: "0.6s", background: menubar }}
        ></div>
        <div className={this.props.classes.title}>
          <div className={this.props.classes.titleString}>About</div>
          <div className={this.props.classes.myname}>uynet</div>
          <div className={this.props.classes.sub}>creator</div>
          <div className={this.props.classes.underLine}></div>
        </div>
        <img
          src="/resource/img/icon.png"
          className={this.props.classes.icon}
        ></img>
        <div className={this.props.classes.space}></div>
        <div className={this.props.classes.bio}>{bio}</div>

        <Box box={box1} />
        <div className={this.props.classes.footerSpace}></div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(About);
