import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { home } from "./style/home.module.scss";
/*
import {
  animateSlideDown,
  animateSlideRight,
  animateSlideUp,
  animateSlideLeft
} from "./style/effects.module.scss";
*/

const s = {};

/*
function genStyle(color, delay) {
  delay += "s";
  return {
    background: color,
    animationDelay: delay
  };
}
*/

/*
const base = "#FFCBD1";
const main = "#FF165C";
const accent = "#FFDF6F";
const hilight = "#6F16FF";
*/

class Home extends React.Component {
  render() {
    /*
    const colors = [hilight, accent, main, base];
    const animate = [
      animateSlideDown,
      animateSlideLeft,
      animateSlideUp,
      animateSlideRight
    ];
    let sec = 1.0;
    let v = 0.1;
    */

    return (
      <React.Fragment>
        {/*colors.map((c, i) => {
          sec += v;
          return (
            <div
              key={i}
              className={classNames(screenOverLay, animate[1])}
              style={genStyle(c, sec)}
            ></div>
          );
        })*/}

        <div className={home}>ゆいブログ</div>
        <img
          className="chara"
          src="/resource/img/bg.png"
          style={{ width: "30%" }}
        ></img>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Home);
