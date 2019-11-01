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
    const colors = ["#30c0e0", "#e0f070", "#303040", "#dff0f1"];
    const animate = [
      animateSlideDown,
      animateSlideLeft,
      animateSlideUp,
      animateSlideRight
    ];
    let sec = 1.0;
    let v = 0.3;
    return (
      <React.Fragment>
      <iframe width="100%" height="300" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/221295727&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe>
        {colors.map((c, i) => {
          sec += v;
          let p = Math.floor(Math.random() * 4) % 4;
          return (
            <div
              key={i}
              className={classNames(screenOverLay, animate[p])}
              style={genStyle(c, sec)}
            ></div>
          );
        })}
        <div className={home}>ゆいブログ</div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Home);
