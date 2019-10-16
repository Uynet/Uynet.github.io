import React from "react";
import { withStyles } from "@material-ui/core/styles";

const s = {
  logo: {
    background: "#fff"
  }
};

class Home extends React.Component {
  render() {
    const logo = this.props.classes.logo;
    return (
      <React.Fragment>
        <div className={logo}>ゆいブログ</div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Home);
