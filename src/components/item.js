import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { item as itemClass, underline } from "./style/item.module.scss";

const s = {};

class Item extends React.Component {
  constructor(props) {
    super(props);
  }
  onClick = e => {
    window.location.assign(this.props.link);
  };
  render() {
    return (
      <React.Fragment>
        <div className={itemClass} onClick={this.onClick}>
          <div>{this.props.name}</div>
          <div className={underline} style={{ background: "#fff" }}></div>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Item);
