import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { base, main, accent, hilight } from "../utils/colors.js";
/*
import {
    carg,image,title
} from "./style/home.module.scss";
*/

const s = {
  card: {
    opacity: 0,
    margin: "10px 20px",
    animation: "fadeIn ease 1.0s forwards",
    display: "inline-block",
    position: "relative",
    width: "30%",
    minWidth: 250,
    height: 250,
    cursor: "pointer",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    border: "solid 3px" + "#f8f0f0",
    borderRadius: 12
  },
  image: { width: "100%" },
  title: {
    animation: "workTitleIn cubic-bezier(0,1,0,1) 1.3s forwards",
    fontFamily: "honoka",
    zIndex: 2,
    width: "100%",
    background: "#6020a0",
    color: base,
    textAlign: "center",
    padding: "4px 0px",
    float: "right",
    borderRadius: "12px 12px 0px 0px",
    bottom: "0px"
  }
};

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onHover: false };
    this.ref = React.createRef();
  }
  handleClick = e => {
    window.location.assign(this.props.link);
  };
  onMouseEnter = e => {
    this.setState({ onHover: true });
  };
  onMouseLeave = e => {
    this.setState({ onHover: false });
  };
  render() {
    console.log(this.props.link);
    return (
      <React.Fragment>
        <div
          onClick={this.handleClick}
          className={this.props.classes.card}
          onMouseEnter={this.onMouseEnter}
          onMouseLeave={this.onMouseLeave}
          style={{
            backgroundImage: "url(" + this.props.imgurl + ")",
            animationDelay: 1.3 + this.props.id / 10 + "s"
          }}
        >
          {this.state.onHover && (
            <div className={this.props.classes.title}>{this.props.name}</div>
          )}
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Work);
