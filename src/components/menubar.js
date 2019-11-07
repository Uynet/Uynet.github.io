import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Item from "./item";
import MediaQuery from "react-responsive";

const main = "#e2146a";
const accent = "#FFDF6F";

const width = 320;

const s = {
  open: {
    tabIndex: 1,
    zIndex: 9,
    background: main,
    width: width,
    height: "100vh",
    position: "fixed",
    top: 0,
    left: "calc(100vw - " + width / 2 + "px)",
    animation: "menuSlideIn 0.4s"
  },
  closed: {
    zIndex: 9,
    background: main,
    width: width,
    height: "100vh",
    position: "fixed",
    top: 0,
    left: "calc(100vw)"
    //animation: "menuSlideOut 0.4s"
  },
  itemtitle: {
    fontFamily: "Nico Moji",
    color: accent,
    fontSize: 30,
    margin: 20,
    paddingTop: 80,
    paddingBottom: 20
  },
  closedMobile: {
    zIndex: 9,
    position: "fixed",
    background: main,
    animationDuration: "0.5s",
    width: "100vw",
    height: "100vh",
    left: 0,
    top: "-100vh"
  },
  openMobile: {
    zIndex: 9,
    position: "fixed",
    background: main,
    animationDuration: "0.5s",
    animationName: "menuSlideDown",
    width: "100vw",
    height: "100vh",
    left: 0,
    top: 0
  }
};

const createMenu = (name, link) => {
  return { name: name, link: link };
};
// 右にでてくる
class Menubar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  toggleOpen = e => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const items = [
      createMenu("Top", "/"),
      createMenu("About", "/about"),
      createMenu("Works", "/works")
    ];
    const className = this.state.isOpen
      ? this.props.classes.open
      : this.props.classes.closed;
    const itemTitleClass = this.props.classes.itemtitle;
    return (
      <React.Fragment>
        <MediaQuery query="(max-width: 429px)">
          <div
            className={
              this.state.isOpen
                ? this.props.classes.openMobile
                : this.props.classes.closedMobile
            }
          >
            <div className={itemTitleClass}>めにゅー</div>
            <div>
              {items.map((item, i) => {
                return (
                  <Item
                    update={this.props.update}
                    name={item.name}
                    link={item.link}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </MediaQuery>
        <MediaQuery query="(min-width: 430px)">
          <div className={className}>
            <div className={itemTitleClass}>めにゅー</div>
            <div>
              {items.map((item, i) => {
                return (
                  <Item
                    update={this.props.update}
                    name={item.name}
                    link={item.link}
                    key={i}
                  />
                );
              })}
            </div>
          </div>
        </MediaQuery>
      </React.Fragment>
    );
  }
}

export default withStyles(s)(Menubar);
