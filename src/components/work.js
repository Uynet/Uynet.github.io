import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { base, main, accent, hilight } from "../utils/colors.js";
/*
import {
    carg,image,title
} from "./style/home.module.scss";
*/

import Modal from "react-modal";
import MediaQuery from "react-responsive";
Modal.setAppElement("#root");

const s = {
  card: {
    opacity: 0,
    animation: "fadeIn ease 1.0s forwards",
    display: "inline-block",
    position: "relative",
    //width: "30%",
    //minWidth: 250,
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
  },
  item: {
    background: "#ddd",
    padding: "10px",
    borderRadius: "8px",
    border: "3px solid #ccc"
  }
};

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 40,
    backgroundColor: "rgba(0, 0 , 0, 0.50)"
  },
  content: {
    zIndex: 41,
    position: "absolute",
    top: "0px",
    left: "0px",
    right: "0px",
    bottom: "0px",
    margin: "auto",
    border: "1px solid #fff",
    background: "#fff",
    overflow: "auto",
    width: "80%",
    height: "90%",
    WebkitOverflowScrolling: "touch",
    borderRadius: 16,
    outline: "none",
    padding: "20px"
  }
};

class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onHover: false, modalIsOpen: false };
    this.ref = React.createRef();
  }
  handleClick = e => {
    //window.location.assign(this.props.link);
    this.openModal();
  };
  onMouseEnter = e => {
    this.setState({ onHover: true });
  };
  onMouseLeave = e => {
    this.setState({ onHover: false });
  };
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  afterOpenModal = () => {};
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  render() {
    return (
      <React.Fragment>
        {/* クリックすると表示される内容 */}
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
        ></Modal>

        {/* PC */}
        <MediaQuery query="(min-width: 430px)">
          <div
            onClick={this.handleClick}
            className={this.props.classes.card}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            style={{
              backgroundImage: "url(" + this.props.imgurl + ")",
              animationDelay: 1.3 + this.props.id / 10 + "s",
              height: "20vw"
            }}
          >
            {this.state.onHover && (
              <div className={this.props.classes.title}>{this.props.name}</div>
            )}
          </div>
        </MediaQuery>

        {/* スマホ */}
        <MediaQuery query="(max-width: 429px)">
          <div
            onClick={this.handleClick}
            className={this.props.classes.card}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            style={{
              backgroundImage: "url(" + this.props.imgurl + ")",
              animationDelay: 1.3 + this.props.id / 10 + "s",
              height: "50vw"
            }}
          >
            {this.state.onHover && (
              <div className={this.props.classes.title}>{this.props.name}</div>
            )}
          </div>
        </MediaQuery>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Work);
