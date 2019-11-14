import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BGEffect from "./BGEffect";
import Box from "./box.js";
import about from "./style/about.module.scss";
import HeaderEffect from "./headerEffect";

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
        <HeaderEffect color="#30FFE0" className={about.header} />
        <div className={about.title}>
          <div className={about.titleString}>About</div>
          <div className={about.underLine}></div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block", position: "absolute" }}>
            <img
              src="/resource/img/icon.png"
              alt={"(ﾉ)･ω･(ヾ)"}
              className={about.icon}
            ></img>
            <div className={about.myname}>uynet</div>
            <div className={about.sub}>creator</div>
          </div>
        </div>

        <div className={about.space}></div>

        <div style={{ textAlign: "center" }}>
          <Box />
        </div>
        <div className={about.footerSpace}></div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(About);
