import React from "react";
import BGEffect from "./BGEffect";
import { withStyles } from "@material-ui/core/styles";
import { base, main, font } from "../utils/colors.js";
import Work from "./work.js";

const s = {
  space: { height: 200 },
  frame: {
    // background: "#fff",
    textAlign: "center",
    opacity: 0,
    color: font,
    animation: "fadeIn  ease 0.6s forwards"
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
    color: base
  },
  underLine: {
    zIndex: 2,
    height: 8,
    borderRadius: 3,
    background: base,
    left: 0,
    right: 0,
    margin: "auto",
    animation: "swipeX cubic-bezier(0.99, 0.01, 0, 1) 1.6s forwards"
  },
  underLine2: {
    zIndex: 2,
    height: 2,
    borderRadius: 4,
    background: main,
    width: 0,
    left: 0,
    right: 0,
    margin: "auto",
    animation: "swipeX cubic-bezier(0.99, 0.01, 0, 1) 1.6s 1.3s forwards"
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
    borderColor: main
  },
  category: {
    width: 100,
    height: 50,
    opacity: 0,
    margin: "auto",
    marginTop: 40,
    textAlign: "center",
    position: "relative",
    animation: "fadeIn  ease 0.6s 1.0s forwards"
  },
  categoryString: {
    color: main,
    fontWeight: "bold",
    fontFamily: "gkktt",
    fontSize: 20
  },
  desc: {
    color: font,
    fontFamily: "honoka",
    margin: 5
  }
};

const genWork = (name, imgurl) => {
  return { name: name, imgurl: imgurl };
};

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  handleClick = e => {
    this.ref.current.toggleOpen();
  };
  render() {
    const products = [
      genWork("サイハテドロップ", "resource/img/kawasemi2.png"),
      genWork("NinjaFlicker", "resource/img/ninja.png"),
      genWork("ぱれっと倶楽部", "resource/img/pallet.png"),
      genWork("CPCTF Visualizer", "resource/img/visualizer.png")
    ];
    return (
      <React.Fragment>
        <BGEffect />
        <div className={this.props.classes.header}></div>
        <div className={this.props.classes.title}>
          <div className={this.props.classes.titleString}>Works</div>
          <div className={this.props.classes.underLine}></div>
        </div>
        <div className={this.props.classes.space}></div>

        <div className={this.props.classes.category}>
          <div className={this.props.classes.categoryString}>Product</div>
          <div className={this.props.classes.underLine2}></div>
          <div className={this.props.classes.desc}>主な制作物</div>
        </div>

        <div className={this.props.classes.frame}>
          {products.map((work, i) => {
            return (
              <Work id={i} key={i} name={work.name} imgurl={work.imgurl} />
            );
          })}
        </div>

        <div className={this.props.classes.category}>
          <div className={this.props.classes.categoryString}>Tips</div>
          <div className={this.props.classes.underLine2}></div>
          <div className={this.props.classes.desc}>諸々</div>
        </div>

        <div className={this.props.classes.space}></div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Works);
