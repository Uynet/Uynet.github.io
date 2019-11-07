import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { logo } from "./style/home.module.scss";
import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fab } from "@fortawesome/free-brands-svg-icons"; //fontawesomeのbrandアイコンのインポート
import { fas } from "@fortawesome/free-solid-svg-icons"; //fontawesomeのsolidアイコンのインポート
import { far } from "@fortawesome/free-regular-svg-icons"; //fontawesomeのregularアイコンのインポート

import {
  screenOverLay,
  animateSlideDown,
  animateSlideRight,
  animateSlideUp,
  animateSlideLeft
} from "./style/effects.module.scss";

const s = {};

function genStyle(color, delay) {
  delay += "s";
  return {
    background: color,
    animationDelay: delay,
    animationDuration: "2.5s"
  };
}

const base = "#FFCBD1";
const main = "#FF165C";
const accent = "#FFDF6F";
const hilight = "#6F16FF";

const genLink = (name, icon) => {
  return { name: name, icon: icon };
};

class Home extends React.Component {
  render() {
    //const colors = [hilight, accent, main, base];
    const colors = ["#ea9090"];
    const animate = [
      animateSlideDown,
      animateSlideLeft,
      animateSlideUp,
      animateSlideRight
    ];
    let sec = 0.0;
    let v = 0.3;

    const links = [genLink("github", "github")];

    return (
      <React.Fragment>
        {/*colors.map((c, i) => {
          sec += v;
          return (
            <div
              key={i}
              className={classNames(screenOverLay, animate[0])}
              style={genStyle(c, sec)}
            >
              <div
                style={{
                  top: "50%",
                  left: "50%",
                  transform: "translateX(-50%)",
                  position: "absolute",
                  margin: "auto",
                  color: "#fff",
                  fontFamily: "Nico Moji",
                  fontSize: 40
                }}
              >
                LOADING...
              </div>
            </div>
          );
        })*/}

        <div className={logo}>ゆいブログ</div>
        <img
          className="chara"
          src="/resource/img/bg.png"
          style={{ width: "30%" }}
        ></img>
        {links.map((link, i) => {
          return (
            <React.Fragment>
              <FontAwesomeIcon icon={["fab", "github"]} />
            </React.Fragment>
          );
        })}
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Home);
