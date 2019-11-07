import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BGEffect from "./BGEffect";

const base = "#fad8e4";
const main = "#e2146a";
const accent = "#FFDF6F";
const hilight = "#6F16FF";

const s = {};

class About extends React.Component {
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
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: 124,
            background: main
          }}
        ></div>
        <div
          style={{
            position: "relative",
            width: 124,
            margin: "auto",
            textAlign: "center",
            align: "center",
            padding: 64
          }}
        >
          <div
            style={{
              textAlign: "center",
              fontFamily: "gkktt",
              fontSize: 30,
              color: base
            }}
          >
            Plofile
          </div>
          <div
            style={{
              height: 8,
              borderRadius: 4,
              background: base,
              animation: "swipeX cubic-bezier(0.99, 0.01, 0, 1) 1.6s forwards"
            }}
          ></div>
        </div>
        <img
          src="/resource/img/icon.png"
          width="100"
          height="100"
          style={{
            position: "absolute",
            borderRadius: "50%",
            transform: "translate(-0%,-0%)",
            left: 0,
            right: 0,
            margin: "auto"
          }}
        ></img>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(About);
