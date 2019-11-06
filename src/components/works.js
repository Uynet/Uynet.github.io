import React from "react";
import { withStyles } from "@material-ui/core/styles";

const s = {};

class Works extends React.Component {
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
        <div>works</div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Works);
