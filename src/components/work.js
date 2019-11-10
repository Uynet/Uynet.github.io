import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  base,
  main,
  accent,
  hilight,
  menubar,
  menubar2,
  itemColor,
  modalBG
} from "../utils/colors.js";
import WorkModal from "./workModal";
import { overLay } from "./style/home.module.scss";

import Modal from "react-modal";
import MediaQuery from "react-responsive";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
  tag: {
    //animation: "workTitleIn cubic-bezier(0,1,0,1) 1.3s forwards",
    position: "absolute",
    top: "calc(100%-20px)",
    fontFamily: "honoka",
    zIndex: 3,
    //width: "22%",
    heihgt: 20,
    float: "bottom",
    background: itemColor,
    color: base,
    textAlign: "center",
    padding: "4px",
    //borderRadius: "0px 0px 12px 12px",
    bottom: "0px"
  },
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
  },
  // >
  nextCursor: {
    position: "absolute",
    zIndex: 999999,
    top: 0,
    right: 20,
    fontSize: 40,
    color: "#000"
  },
  // <
  prevCursor: {
    position: "absolute",
    zIndex: 9999,
    top: 0,
    left: 20,
    fontSize: 40,
    color: "#000"
  }
};
const customStylesSp = {
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
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    overflow: "auto",
    width: "100%",
    height: "80%",
    background: modalBG,
    WebkitOverflowScrolling: "touch",
    padding: 0,
    borderRadius: 0
  }
};

const customStyles = {
  overlay: {
    //backdropFilter: "blur(4px)",
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 40,
    backgroundColor: "rgba(0, 0 , 0, 0.40)",
    "&:hover": {
      backgroundColor: "rgba(0, 0 , 0, 0.10)"
    }
  },
  content: {
    zIndex: 41,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    background: modalBG,
    overflow: "auto",
    width: "80%",
    maxWidth: "100vh",
    minWidth: 250,
    height: "91%",
    WebkitOverflowScrolling: "touch",
    padding: 0,
    borderRadius: 16,
    border: "none"
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
    const { name, imgurls, description, date } = this.props.work;
    return (
      <React.Fragment>
        {/* PC */}
        <MediaQuery query="(min-width: 430px)">
          {/* クリックすると表示される内容 */}
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStyles}
            overLayClassName={overLay}
          >
            <WorkModal work={this.props.work}></WorkModal>
          </Modal>

          <div
            onClick={this.handleClick}
            className={this.props.classes.card}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            style={{
              backgroundImage: "url(" + imgurls[0] + ")",
              animationDelay: 1.3 + this.props.id / 10 + "s",
              height: "20vw"
            }}
          >
            {this.state.onHover && (
              <>
                <div className={this.props.classes.title}>{name}</div>
                {/*<div className={this.props.classes.tag}>GAME</div>*/}
              </>
            )}
          </div>
        </MediaQuery>

        {/* スマホ */}
        <MediaQuery query="(max-width: 429px)">
          {/* クリックすると表示される内容 */}
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStylesSp}
          >
            <WorkModal work={this.props.work}></WorkModal>
          </Modal>

          <div
            onClick={this.handleClick}
            className={this.props.classes.card}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            style={{
              backgroundImage: "url(" + imgurls[0] + ")",
              animationDelay: 1.3 + this.props.id / 10 + "s",
              height: "50vw"
            }}
          >
            {this.state.onHover && (
              <div className={this.props.classes.title}>{name}</div>
            )}
          </div>
        </MediaQuery>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Work);
