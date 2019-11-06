import React from "react";
import { withStyles } from "@material-ui/core/styles";

const main = "#e2146a";
const accent = "#FFDF6F";

const width = 220;
const s = {
  open: {
    background: main,
    width: width,
    height: "100vh",
    position: "fixed",
    top: 0,
    left: "calc(100vw - " + width + "px)"
  },
  closed: {
    background: main,
    width: width,
    height: "100vh",
    position: "fixed",
    top: 0,
    left: "calc(100vw)"
  },
  itemtitle: {
    color: accent,
    fontSize: 30,
    margin: 20
  },
  item: {
    color: "#fff",
    fontSize: 18,
    padding: 12
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
        <div className={className}>
          <div className={itemTitleClass}>めにゅー</div>
          <div>
            {items.map((item, i) => {
              return <div className={this.props.classes.item}>{item.name}</div>;
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Menubar);
