import React from "react";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import Home from "./home.js";
import About from "./about.js";
import Works from "./works.js";
import Contact from "./contact.js";
import {
  modalBG,
  menubar2,
  menubar,
  hilight,
  itemColor,
  font,
  accent,
  main,
  base
} from "../utils/colors.js";
//import Blog from "./blog.js";
import {
  screenOverLay,
  animateSlideDown,
  animateSlideRight,
  animateSlideUp,
  animateSlideLeft
} from "./style/effects.module.scss";

const s = {
  loadingtext: {
    top: "50%",
    left: "50%",
    transform: "translateX(-50%)",
    position: "absolute",
    margin: "auto",
    zIndex: 500,
    color: "#fff",
    fontFamily: "Nico Moji",
    fontSize: 40
  }
};

function genStyle(color, delay) {
  delay += "s";
  return {
    opacity: 1.0,
    zIndex: 200,
    background: color,
    animationDelay: delay,
    animationDuration: "2.0s"
  };
}

const loadtime = [500, 500, 3000, 1000, 0];
class LoadAll extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
  }
  componentDidMount = () => {
    setTimeout(this.loadNext, 500);
  };
  onLoadingAnimationEnd = () => {
    setTimeout(this.props.onLoadCompleted, 0);
  };
  loadNext = () => {
    this.setState({ index: this.state.index + 1 });
    if (this.state.index < 5)
      setTimeout(this.loadNext, loadtime[this.state.index - 1]);
  };
  render() {
    const colors = [itemColor, menubar2, font];
    //const colors = [];
    const animate = [
      animateSlideDown,
      animateSlideLeft,
      animateSlideUp,
      animateSlideRight
    ];
    let sec = 0.0;
    let v = 0.8;

    return (
      <React.Fragment>
        <div className={this.props.classes.loadingtext}>LOADING...</div>
        <div
          className={classNames(screenOverLay, animate[0])}
          style={{
            opacity: 1,
            zIndex: 1,
            background: main,
            animationDelay: 0,
            animationDuration: "5.0s"
          }}
          onAnimationEnd={this.onLoadingAnimationEnd}
        />
        {colors.map((c, i) => {
          sec += v;
          return (
            <div
              key={i}
              className={classNames(screenOverLay, animate[2])}
              style={genStyle(c, sec)}
            ></div>
          );
        })}
        {
          <div style={{ opacity: 0 }}>
            {this.state.index === 1 && <Home />}
            {this.state.index === 2 && <About />}
            {this.state.index === 3 && <Works />}
            {this.state.index === 4 && <Contact />}
          </div>
        }
      </React.Fragment>
    );
  }
}
export default withStyles(s)(LoadAll);