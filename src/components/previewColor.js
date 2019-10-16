import React from "react";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  app: {}
};

class PreviewColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: props.color
    };
  }
  render() {
    const size = 32;
    const r = 0;
    return (
      <div
        style={{
          isplay: "block",
          float: "left",
          borderRadius: r,
          height: size,
          width: size,
          background: this.state.color
        }}
      ></div>
    );
  }
}

export default withStyles(styles)(PreviewColor);
