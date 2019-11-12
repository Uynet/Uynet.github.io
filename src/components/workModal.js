import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hammer from "react-hammerjs"; //スワイプ検出

import MediaQuery from "react-responsive";
import { main, modalBG, base, menubar2 } from "../utils/colors.js";
import { linkClass } from "./style/modal.module.scss";
import {
  footer,
  deleteIcon,
  goNextPC,
  goPrevPC
} from "./style/modal.module.scss";

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
  pleyIcon: {
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
  },
  pleyIconSound: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    color: main,
    background: base,
    borderRadius: "50%",
    border: "solid 2px" + base,
    fontSize: 35,
    zIndex: 1
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
    background: modalBG,
    height: "100%"
  },
  description: {
    background: modalBG,
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
const threshold = 80;

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
    const dx = Math.abs(e.deltaY) > 50 ? 0 : e.deltaX;
    this.setState({
      deltaX: dx
    });
  };
  onPanStart = () => {};
  onPanEnd = () => {
    const dx = this.state.deltaX;
    this.setState({ deltaX: 0 });
    if (dx > threshold) this.props.goNext();
    else if (dx < -threshold) this.props.goPrev();
  };
  calcOpacity(dx) {
    return Math.min(Math.max(0, 1 - dx / 80), 1);
  }
  interpol(dx) {
    const a = Math.min(1, Math.max(0, dx / threshold));
    const r1 = 32;
    const g1 = 16;
    const b1 = 48;
    const r2 = 240;
    const g2 = 180;
    const b2 = 80;
    const r = r1 + (r2 - r1) * a;
    const g = g1 + (g2 - g1) * a;
    const b = b1 + (b2 - b1) * a;
    const c = "rgb(" + r + "," + g + "," + b + ")";
    return c;
  }
  genStyleLeft(dx) {
    const c = this.interpol(dx);
    const ease = x => {
      return Math.atan(x / 1000) * threshold;
    };
    return {
      transform: "translateX(" + Math.max(0, ease(dx)) + "px)",
      color: c
    };
  }
  genStyleRight(dx) {
    const c = this.interpol(-dx);
    const ease = x => {
      return Math.atan(x / 1000) * threshold;
    };
    return {
      transform: "translateX(" + Math.min(0, -ease(-dx)) + "px)",
      color: c
    };
  }

  render() {
    const { name, imgurls, links, description, date } = this.props.work;
    const LargeClipImgurl = imgurls[this.state.imgLoc];
    return (
      <React.Fragment>
        <Hammer
          onPanStart={this.onPanStart}
          onPan={this.onPan}
          onPanEnd={this.onPanEnd}
        >
          <div className={this.props.classes.modal}>
            {/*PC版で表示される、モーダル移動アイコン*/}
            <MediaQuery query="(min-width: 430px)">
              <div className={goNextPC} onClick={this.props.goNext}>
                {<FontAwesomeIcon icon={["fas", "greater-than"]} />}
              </div>
              <div className={goPrevPC} onClick={this.props.goPrev}>
                {<FontAwesomeIcon icon={["fas", "less-than"]} />}
              </div>
            </MediaQuery>
            <MediaQuery query="(max-width: 429px)">
              <div className={deleteIcon} onClick={this.props.close}>
                {<FontAwesomeIcon icon={["fas", "times"]} />}
              </div>
            </MediaQuery>
            <div
              style={{ width: "100%", height: 40, background: "#302040" }}
            ></div>
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
                      classes={this.props.classes}
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
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener"
                      className={linkClass}
                      key={i}
                    >
                      {link.name}
                      <FontAwesomeIcon
                        style={{ fontSize: 10 }}
                        icon={["fas", "external-link-alt"]}
                      ></FontAwesomeIcon>
                    </a>
                  );
                })}
              </div>
              <MediaQuery query="(max-width: 429px)">
                <div className={footer}>
                  {
                    <div
                      style={{
                        position: "absolute",
                        left: 0,
                        right: 0,
                        top: 12,
                        bottom: 0,
                        margin: "auto"
                      }}
                    >
                      <FontAwesomeIcon
                        style={this.genStyleRight(this.state.deltaX)}
                        icon={["fas", "less-than"]}
                      />
                      <span style={{ color: "#201030" }}>
                        {"     左右スワイプで切り替え     "}
                      </span>
                      <FontAwesomeIcon
                        style={this.genStyleLeft(this.state.deltaX)}
                        icon={["fas", "greater-than"]}
                      />
                    </div>
                  }
                </div>
              </MediaQuery>
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
  minWidth: "100%"
  //minHeight: "100%"
};

const LargeClip = props => {
  const { img, ext } = props;
  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "60vh",
        background: "#000"
      }}
    >
      {ext === "mp4" ? (
        <video controls style={centerize} src={img} preload="true" />
      ) : ext === "png" || ext === "gif" ? (
        <img src={img} style={centerize} alt="loading" />
      ) : ext === "youtube" ? (
        <iframe
          title="youtube"
          height="100%"
          width="100%"
          src={img}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          alt="loading"
        ></iframe>
      ) : ext === "soundcloud" ? (
        <iframe
          title="soundcloud"
          height="100%"
          width="100%"
          src={img}
          frameBorder="0"
          alt="loading"
        ></iframe>
      ) : (
        <div>バグ</div>
      )}
    </div>
  );
};

const SmallClip = props => {
  // index:画像index
  // isDisplaying:拡大表示選択している画像のサムネであるかどうか:
  const { img, ext, index, isDisplaying, handleClick, classes } = props;
  const youtubeID = img.split("embed/")[1]; //may be undefined
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
            className={classes.pleyIcon}
            icon={["fas", "play-circle"]}
          />
          <div
            style={{
              borderRadius: 8,
              width: "100%",
              height: "100%",
              boxShadow: isDisplaying && "0 0 0 2px" + menubar2
            }}
          >
            <video
              style={{
                objectFit: "cover",
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                borderRadius: 8,
                background: modalBG,
                boxShadow: isDisplaying && "0 0 0 2px" + menubar2
              }}
              src={img}
            />
          </div>
        </>
      ) : // 画像
      ext === "png" || ext === "gif" ? (
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
      ) : ext === "youtube" ? (
        <>
          <FontAwesomeIcon
            className={classes.pleyIcon}
            icon={["fas", "play-circle"]}
          />
          <div
            style={{
              borderRadius: 8,
              width: "100%",
              height: "100%",
              backgroundImage:
                "url(" +
                "https://img.youtube.com/vi/" +
                youtubeID +
                "/1.jpg" +
                ")",
              backgroundSize: "cover",
              backgroundPosition: "center center",
              boxShadow: isDisplaying && "0 0 0 2px" + menubar2
            }}
          />
        </>
      ) : (
        <div
          style={{
            borderRadius: 8,
            width: "100%",
            height: "100%",
            background: modalBG,
            boxShadow: isDisplaying && "0 0 0 2px" + menubar2
          }}
        >
          <FontAwesomeIcon
            className={classes.pleyIconSound}
            icon={["fas", "play-circle"]}
          />
        </div>
      )}
    </div>
  );
};
