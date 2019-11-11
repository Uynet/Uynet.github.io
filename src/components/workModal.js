import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hammer from "react-hammerjs"; //スワイプ検出

import {
  modalBG,
  base,
  font,
  main,
  accent,
  menubar,
  menubar2,
  itemColor
} from "../utils/colors.js";
import { linkClass } from "./style/modal.module.scss";
import { footer } from "./style/modal.module.scss";

const s = {
  image: {
    textAlign: "centere",
    margin: "auto",
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    cursor: "pointer",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    boxShadow: "0px 0px 40px 10px rgba(0,0,0,0.8) inset"
  },

  video: {
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    cursor: "pointer",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    outline: "none",
    height: "50vmax"
    //boxShadow: "0px 0px 40px 10px rgba(,0,0,0.8) inset"
  },
  card: {
    padding: 20,
    background: modalBG
  },
  modal: {
    position: "relative",
    background: modalBG
  },
  description: {
    background: modalBG,
    color: font,
    color: base,
    marginLeft: 10,
    marginTop: 18
  },
  links: {
    marginLeft: 10,
    marginTop: 14
  },
  date: {
    fontSize: 2,
    // fontFamily: "honoka",
    //background: menubar,
    color: base
  },
  title: {
    fontSize: 40,
    // fontFamily: "honoka",
    //background: menubar,
    fontWeight: "bold",
    color: base
  }
};

class WorkModal extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = { imgLoc: 0, onHover: false, deltaX: 0 };
  }
  handleClick = e => {
    this.ref.current.toggleOpen();
  };
  // 小さい方の画像を押すとそれを選択して表示させる
  handleClickSmall = index => {
    this.setState({ imgLoc: index });
  };
  onMouseEnter = e => {
    this.setState({ onHover: true });
  };
  onMouseLeave = e => {
    this.setState({ onHover: false });
  };
  onPan = e => {
    this.setState({
      deltaX: e.deltaX
    });
    console.log(this.state.deltaX);
  };
  onPanStart = () => {
    //
  };
  onPanEnd = () => {
    if (Math.abs(this.state.deltaX) < 99) {
      this.setState({
        deltaX: 0
      });
    } else {
      this.props.close();
    }
  };
  calcOpacity(dx) {
    return Math.min(Math.max(0, 1 - Math.abs(dx) / 100), 1);
  }
  render() {
    const { name, imgurls, links, tags, description, date } = this.props.work;
    const LargeClipImgurl = imgurls[this.state.imgLoc];
    return (
      <React.Fragment>
        <Hammer
          onPanStart={this.onPanStart}
          onPan={this.onPan}
          onPanEnd={this.onPanEnd}
        >
          <div
            className={this.props.classes.modal}
            style={{
              transform: "translate(" + this.state.deltaX + "px)",
              opacity: this.calcOpacity(this.state.deltaX)
            }}
          >
            <LargeClip
              style={{
                display: "inline-block"
              }}
              className={this.props.classes.LargeClip}
              ext={LargeClipImgurl.split(".")[1]}
              img={LargeClipImgurl}
              imgClass={this.props.classes.image}
              videoClass={this.props.classes.video}
            />
            {//画像が複数なら切り替え用サムネイルを出す
            imgurls.length >= 2 && (
              //modalBG = "#201030";
              <div
                align="center"
                style={{
                  background: "#302040",
                  boxShadow: "4px 4px 10px 0px rgba(0,0,0,0.3) inset"
                }}
              >
                {imgurls.map((img, i) => {
                  return (
                    <SmallClip
                      key={i}
                      index={i}
                      isDisplaying={i === this.state.imgLoc}
                      ext={img.split(".")[1]}
                      img={img}
                      handleClick={this.handleClickSmall}
                    />
                  );
                })}
              </div>
            )}
            <div className={this.props.classes.card}>
              <div className={this.props.classes.title}>{name}</div>
              <div className={this.props.classes.date}>{date}</div>
              <div className={this.props.classes.description}>
                {description}
              </div>
              <div className={this.props.classes.links}>
                {links.map((link, i) => {
                  return (
                    <a href={link.url} className={linkClass} key={i}>
                      {link.name}
                      <FontAwesomeIcon
                        style={{ fontSize: 10 }}
                        icon={["fas", "external-link-alt"]}
                      ></FontAwesomeIcon>
                    </a>
                  );
                })}
              </div>
            </div>
            <div className={footer}>
              {/*<FontAwesomeIcon icon={["fas", "less-than"]} />{" "}
            <FontAwesomeIcon icon={["fas", "greater-than"]} />
              <FontAwesomeIcon
                icon={["fas", "times"]}
                onClick={() => this.props.close()}
              />*/}
            </div>
          </div>
        </Hammer>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(WorkModal);

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
  minWidth: "100%",
  minHeight: "100%"
};

const LargeClip = props => {
  const { img, ext, imgClass, videoClass } = props;
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "50vh",
        background: "#000"
      }}
    >
      {ext === "mp4" ? (
        // 再生アイコンのついたサムネイルを押してから表示されるので、自動再生の方がUX的に良いかなと思った
        <video controls style={centerize} src={img} autoPlay preload="true" />
      ) : (
        <img src={img} style={centerize} />
      )}
    </div>
  );
};

const SmallClip = props => {
  // index:画像index
  // isDisplaying:拡大表示選択している画像のサムネであるかどうか:
  const { img, ext, index, isDisplaying, handleClick } = props;
  return (
    <div
      style={{
        position: "relative",
        display: "inline-block",
        cursor: "pointer",
        margin: "16px 8px",
        width: "20vw",
        height: "20vw",
        maxWidth: 100,
        maxHeight: 100,
        minWidth: 20,
        minHeight: 20
      }}
      onClick={() => handleClick(index)}
    >
      {ext === "mp4" ? (
        // 動画
        <>
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
          <video
            style={{
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              preload: "none",
              borderRadius: 8,
              boxShadow: isDisplaying && "0 0 0 2px" + menubar2
            }}
            src={img}
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
            backgroundPosition: "center center",
            boxShadow: isDisplaying && "0 0 0 2px" + menubar2
          }}
        />
      )}
    </div>
  );
};
