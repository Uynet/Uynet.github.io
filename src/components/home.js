import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  logo,
  links as linksClass,
  link as linkClass
} from "./style/home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import BGEffect from "./BGEffect.js";
import { itemColor, main } from "../utils/colors.js";
const s = {
  logoSubText: {
    color: main,
    fontSize: 16,
    position: "absolute",
    top: "60%",
    left: "3%",
    margin: "auto",
    fontFamily: "honoka"
  }
};

const genLink = (name, url) => {
  return { name: name, url: url };
};

class Home extends React.Component {
  componentDidMount() {
    document.body.classList.add("no-scroll");
  }
  componentWillUnmount() {
    document.body.classList.remove("no-scroll");
  }
  render() {
    const links = [
      genLink("github", "http://github.com/Uynet"),
      genLink("twitter", "http://twitter.com/uynet"),
      genLink("soundcloud", "https://soundcloud.com/saihate-1")
    ];

    return (
      <React.Fragment>
        <BGEffect />

        <div className={logo}>ゆいブログ</div>
        <img
          className="chara"
          src="/resource/img/bg.png"
          alt={"٩( 'ω' )و"}
        ></img>
        <div className={linksClass} align="center">
          {links.map((link, i) => {
            return (
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
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Home);
