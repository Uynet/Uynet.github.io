import React from "react";
import { withStyles } from "@material-ui/core/styles";
import s from "./style/home.module.scss";
import { home } from "./style/home.module.scss";

class Home extends React.Component {
  render() {
    console.log(home);
    return (
      <React.Fragment>
        <div className={home}>ゆいブログ</div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Home);
