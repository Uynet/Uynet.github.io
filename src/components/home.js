import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  logo,
  links as linksClass,
  link as linkClass
} from "./style/home.module.scss";
//import classNames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  //screenOverLay,
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
const main = "#e2146a";
const accent = "#FFDF6F";
const hilight = "#6F16FF";

const genLink = (name, url) => {
  return { name: name, url: url };
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

    const links = [
      genLink("github", "http://github.com/Uynet"),
      genLink("twitter", "http://twitter.com/uynet"),
      genLink("soundcloud", "https://soundcloud.com/saihate-1")
    ];

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
        <img className="chara" src="/resource/img/bg.png"></img>
        <div className={linksClass} align="center">
          {links.map((link, i) => {
            return (
              <React.Fragment>
                <div
                  onClick={() => window.location.assign(link.url)}
                  key={i}
                  style={{
                    animationDelay: 1.0 + i * 0.1 + "s"
                  }}
                  className={linkClass}
                >
                  <FontAwesomeIcon
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: "translate(-50%,-50%)"
                    }}
                    icon={["fab", link.name]}
                  />
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Home);
