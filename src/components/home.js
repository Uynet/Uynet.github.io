import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { home } from "./style/home.module.scss";
import { screenOverLay } from "./style/effects.module.scss";
import {
  animateSlideDown,
  animateSlideRight,
  animateSlideUp,
  animateSlideLeft
} from "./style/effects.module.scss";
import classNames from "classnames";

const s = {};

function genStyle(color, delay) {
  delay += "s";
  return {
    background: color,
    animationDelay: delay
  };
}

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div
          className={classNames(screenOverLay, animateSlideDown)}
          style={genStyle("#30c0e0", 1.0)}
        ></div>
        <div
          className={(screenOverLay, animateSlideDown)}
          style={genStyle("#e0f070", 1.1)}
        ></div>
        <div
          className={(screenOverLay, animateSlideDown)}
          style={genStyle("#334", 1.2)}
        ></div>
        <div
          className={(screenOverLay, animateSlideDown)}
          style={genStyle("#dff0f1", 1.3)}
        ></div>
        <div className={home}>ゆいブログ</div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Home);
