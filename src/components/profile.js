import React from "react";
import { withStyles } from "@material-ui/core/styles";
import BGEffect from "./BGEffect";
import Box from "./box.js";
import profile from "./style/profile.module.scss";
import HeaderEffect from "./headerEffect";

const s = {};

class Profile extends React.Component {
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
        <HeaderEffect color="#30FFE0" className={profile.header} />
        <div className={profile.title}>
          <div className={profile.titleString}>profile</div>
          <div className={profile.underLine}></div>
        </div>

        <div style={{ textAlign: "center" }}>
          <div style={{ display: "inline-block", position: "absolute" }}>
            <img
              src="/resource/img/icon.png"
              alt={"(ﾉ)･ω･(ヾ)"}
              className={profile.icon}
            ></img>
            <div className={profile.myname}>uynet</div>
            <div className={profile.sub}></div>
          </div>
        </div>

        <div className={profile.space}></div>

        <div style={{ textAlign: "center" }}>
          <Box />
        </div>
        <div className={profile.footerSpace}></div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Profile);
