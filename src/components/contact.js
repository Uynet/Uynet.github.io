import React from "react";
import BGEffect from "./BGEffect";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { accent, main, font, menubar, menubar2 } from "../utils/colors.js";
import MediaQuery from "react-responsive";
import contact from "./style/contact.module.scss";

const s = {
  space: { height: 200 },
  footerSpace: { height: 60 },
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
    animation: "swipeY cubic-bezier(0, 1, 0, 1) 2.6s forwards"
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
    color: accent
  },
  titleStringSp: {
    zIndex: 2,
    fontFamily: "gkktt",
    fontSize: 70,
    maxWidth: "100%",
    color: accent
  },
  underLine: {
    zIndex: 2,
    height: 8,
    borderRadius: 3,
    background: menubar2,
    left: 0,
    right: 0,
    margin: "auto",
    animation: "swipeX cubic-bezier(0.99, 0.01, 0, 1) 1.6s forwards"
  },
  underLine2: {
    zIndex: 2,
    height: 4,
    borderRadius: 4,
    background: main,
    width: 0,
    left: 0,
    right: 0,
    margin: "auto",
    animation: "swipeXcat cubic-bezier(0.99, 0.01, 0, 1) 1.6s 1.3s forwards"
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
    fontFamily: "honoka",
    fontSize: 20
  },
  desc: {
    textAlign: "center",
    color: font,
    fontFamily: "honoka",
    margin: 5
  }
};

class Contact extends React.Component {
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
          style={{ animationDelay: "0.5s", background: accent }}
        ></div>
        <div
          className={this.props.classes.header}
          style={{ animationDelay: "0.6s", background: menubar }}
        ></div>
        <div className={this.props.classes.title}>
          <MediaQuery query="(max-width: 429px)">
            <div className={this.props.classes.titleStringSp}>Contact</div>
          </MediaQuery>
          <MediaQuery query="(min-width: 430px)">
            <div className={this.props.classes.titleString}>Contact</div>
          </MediaQuery>
          <div className={this.props.classes.underLine}></div>
        </div>
        <div className={this.props.classes.space}></div>

        <div className={this.props.classes.category}>
          <div className={this.props.classes.categoryString}>連絡先</div>
          <div className={this.props.classes.underLine2}></div>
        </div>
        <div className={contact.content}>
          何かありましたらメールもしくはTwitterまで
          <div style={{ margin: "5% 0px" }}>
            <table style={{ margin: "auto", left: 0, right: 0 }}>
              <tbody>
                <tr>
                  <th></th>
                  <th></th>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      className={contact.mailIcon}
                      icon={["fas", "envelope"]}
                    />
                  </td>
                  <td></td>
                  <td className={contact.mailAdress}>
                    highsate
                    <FontAwesomeIcon icon={["fas", "at"]} />
                    gmail.com
                  </td>
                </tr>
                <tr>
                  <td>
                    <FontAwesomeIcon
                      className={contact.twitterIcon}
                      icon={["fab", "twitter"]}
                    />
                  </td>
                  <td></td>
                  <td className={contact.twitterAccount}>
                    <a
                      href="http://twitter.com/uynet"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FontAwesomeIcon icon={["fas", "at"]} />
                      uynet
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className={this.props.classes.footerSpace}></div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Contact);
