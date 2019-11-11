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
import { NONAME } from "dns";
import ReactSwipe from "react-swipe";

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
    zIndex: 200000000000000000,
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
  },
  modalbody: {
    overflow: "hidden"
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
    backgroundColor: "rgba(0, 0 , 0, 0)"
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
    border: "none",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0 , 0, 0)",
    background: modalBG,
    WebkitOverflowScrolling: "touch",
    padding: 0,
    borderRadius: 0
  },
  ReactModal__BodyOpen: {
    position: fixed
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
    height: "88%",
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
            bodyOpenClassName={this.props.classes.modalbody}
          >
            <WorkModal
              work={this.props.work}
              close={this.closeModal}
            ></WorkModal>
          </Modal>
          <Clip
            img={imgurls[0]}
            ext={imgurls[0].split(".")[1]}
            className={this.props.classes.card}
            titleClass={this.props.classes.title}
            name={name}
            index={this.props.id}
            onClick={this.handleClick}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onHover={this.state.onHover}
            style={{
              height: "20vw"
            }}
          >
            {/*
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
          */}
          </Clip>
        </MediaQuery>

        {/* スマホ */}
        <MediaQuery query="(max-width: 429px)">
          {/* クリックすると表示される内容 */}
          <Modal
            isOpen={this.state.modalIsOpen}
            onAfterOpen={this.afterOpenModal}
            onRequestClose={this.closeModal}
            style={customStylesSp}
            bodyOpenClassName={this.props.classes.modalbody}
          >
            <WorkModal
              work={this.props.work}
              close={this.closeModal}
            ></WorkModal>
          </Modal>

          <Clip
            img={imgurls[0]}
            ext={imgurls[0].split("."[1])}
            className={this.props.classes.card}
            onClick={this.handleClick}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            style={{
              height: "20vw"
            }}
          />
        </MediaQuery>
      </React.Fragment>
    );
  }
}
const Clip = props => {
  // index:画像index
  // isDisplaying:拡大表示選択している画像のサムネであるかどうか:
  const {
    img,
    ext,
    onClick,
    onMouseEnter,
    onMouseLeave,
    className,
    name,
    onHover,
    titleClass,
    index
  } = props;
  const w = "100%";
  const h = "20vmax";
  return (
    <div
      onClick={onClick}
      onMouseEnter={e => onMouseEnter()}
      onMouseLeave={e => onMouseLeave()}
      className={className}
      style={{
        animationDelay: 1.3 + index / 10 + "s",
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        margin: "16px 8px",
        minHeight: "30vh",
        width: w,
        height: h
      }}
    >
      {onHover && (
        <>
          <div className={titleClass}>{name}</div>
          {/*<div className={this.props.classes.tag}>GAME</div>*/}
        </>
      )}
      {ext === "mp4" ? (
        // 動画
        <>
          {/*
          <FontAwesomeIcon
            style={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              margin: "auto",
              color: menubar2,
              background: base,
              borderRadius: "50%",
              border: "solid 2px" + base,
              fontSize: 35,
              zIndex: 1
            }}
            icon={["fas", "play-circle"]}
          />
 */}
          <video
            style={{
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              preload: "none",
              borderRadius: 8
            }}
            src={img}
            autoPlay
          />
        </>
      ) : (
        // 画像
        <div
          style={{
            borderRadius: 8,
            width: "100%",
            height: "100%",
            backgroundImage: "url(" + img + ")",
            backgroundSize: "cover",
            backgroundPosition: "center center"
          }}
        />
      )}
    </div>
  );
};

export default withStyles(s)(Work);
