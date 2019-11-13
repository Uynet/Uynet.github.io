import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { main, base, itemColor, modalBG } from "../utils/colors.js";
import WorkModal from "./workModal";
import { overLay } from "./style/home.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-modal";
import MediaQuery from "react-responsive";

Modal.setAppElement("#root");

const s = {
  card: {
    opacity: 0,
    animation: "fadeIn ease 1.0s forwards",
    display: "inline-block",
    position: "relative",
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
    position: "relative",
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
    const { name, imgurls } = this.props.work;
    const { isFirstTime, modalIsOpen } = this.props;
    return (
      <React.Fragment>
        {/* PC */}
        <MediaQuery query="(min-width: 430px)">
          <Clip
            img={imgurls[0]}
            ext={imgurls[0].split(".")[1]}
            className={this.props.classes.card}
            titleClass={this.props.classes.title}
            name={name}
            index={this.props.id}
            onClick={e => this.props.handleClick(this.props.work)}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onHover={this.state.onHover}
            style={{
              height: "20vw"
            }}
          ></Clip>
        </MediaQuery>

        {/* スマホ */}
        <MediaQuery query="(max-width: 429px)">
          <Clip
            isFirstTime={isFirstTime}
            modalIsOpen={modalIsOpen}
            img={imgurls[0]}
            ext={imgurls[0].split(".")[1]}
            className={this.props.classes.card}
            titleClass={this.props.classes.title}
            name={name}
            index={this.props.id}
            onClick={e => this.props.handleClick(this.props.work)}
            onMouseEnter={this.onMouseEnter}
            onMouseLeave={this.onMouseLeave}
            onHover={this.state.onHover}
            style={{
              height: "20vw"
            }}
          />
        </MediaQuery>
      </React.Fragment>
    );
  }
}
const centerize = {
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  margin: "auto",
  width: "auto",
  height: "auto",
  maxWidth: "100%",
  maxHeight: "100%",
  minWidth: "100%"
  //minHeight: "100%"
};

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
    index,
    isFirstTime,
    modalIsOpen
  } = props;
  const w = "100%";
  const h = "20vmax";

  return (
    <div
      onClick={onClick}
      onMouseEnter={e => onMouseEnter()}
      onMouseLeave={e => onMouseLeave()}
      //className={className}
      style={{
        opacity: isFirstTime ? 0 : 1,
        display: "inline-block",
        backgroundSize: "cover",
        backgroundPosition: "center center",
        border: "solid 3px" + "#f8f0f0",
        borderRadius: 12,
        animation: isFirstTime && "fadeIn ease 1.0s forwards",
        animationDelay: isFirstTime && 1.3 + index / 10 + "s",
        position: modalIsOpen ? "absolute" : "relative",
        top: modalIsOpen && "-100vh",
        display: "inline-block",
        cursor: "pointer",
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
          <video
            style={{
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              borderRadius: 8,
              zIndex: 1
            }}
            src={img}
          />
        </>
      ) : ext === "png" || ext === "gif" ? (
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
      ) : (
        <>
          <FontAwesomeIcon
            style={{
              color: main,
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              right: 0,
              margin: "auto",
              width: "auto",
              height: "auto",
              maxWidth: "100%",
              maxHeight: "30%",
              minWidth: "30%"
              //minHeight: "100%"
            }}
            icon={["fab", "soundcloud"]}
          />
        </>
      )}
    </div>
  );
};

export default withStyles(s)(Work);
