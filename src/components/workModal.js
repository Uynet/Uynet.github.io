import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Hammer from "react-hammerjs"; //スワイプ検出

import MediaQuery from "react-responsive";
import { menubar, accent, modalBG, base, menubar2 } from "../utils/colors.js";
import { linkClass } from "./style/modal.module.scss";
import { footer, deleteIcon, goNext, goPrev } from "./style/modal.module.scss";
import modal from "./style/modal.module.scss";

const s = {};
const threshold = 80;
const ease = x => {
  return Math.atan(x / 1000) * threshold;
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
    const dx = e.deltaX;
    this.setState({
      deltaX: dx
    });
  };
  onPanStart = () => {};
  onPanEnd = () => {
    const dx = this.state.deltaX;
    this.setState({ deltaX: 0 });
    if (dx > threshold) this.goPrev();
    else if (dx < -threshold) this.goNext();
  };
  goNext = () => {
    this.setState({ imgLoc: 0, onHover: false, deltaX: 0 });
    this.props.goNext();
  };
  goPrev = () => {
    this.setState({ imgLoc: 0, onHover: false, deltaX: 0 });
    this.props.goPrev();
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
    dx = 0;
    const c = this.interpol(dx);
    return {
      transform: "translateX(" + Math.min(0, -ease(dx)) + "px)",
      color: c
    };
  }
  genStyleRight(dx) {
    dx = 0;
    const c = this.interpol(-dx);
    return {
      transform: "translateX(" + Math.max(0, ease(-dx)) + "px)",
      color: c
    };
  }

  render() {
    const {
      name,
      imgurls,
      links,
      description,
      date,
      category
    } = this.props.work;
    const LargeClipImgurl = imgurls[this.state.imgLoc];
    return (
      <React.Fragment>
        {/*PC版 モーダル移動アイコン*/}
        <MediaQuery query="(min-width: 430px)">
          <div className={goNext} onClick={this.goNext}>
            {<FontAwesomeIcon icon={["fas", "greater-than"]} />}
          </div>
          <div className={goPrev} onClick={this.goPrev}>
            {<FontAwesomeIcon icon={["fas", "less-than"]} />}
          </div>
        </MediaQuery>
        {/*スマホ版 モーダル移動アイコン*/}
        <MediaQuery query="(max-width: 429px)">
          <div
            className={goNext}
            onClick={this.goNext}
            style={{ opacity: -this.state.deltaX / threshold }}
          >
            {<FontAwesomeIcon icon={["fas", "greater-than"]} />}
          </div>
          <div
            className={goPrev}
            onClick={this.goPrev}
            style={{ opacity: this.state.deltaX / threshold }}
          >
            {<FontAwesomeIcon icon={["fas", "less-than"]} />}
          </div>
        </MediaQuery>
        <MediaQuery query="(max-width: 429px)">
          <div className={deleteIcon} onClick={this.props.close}>
            <div style={{ position: "relative" }}>
              {
                <FontAwesomeIcon
                  style={{
                    display: "inline",
                    position: "absolute",
                    top: 6,
                    left: 0,
                    right: 0,
                    margin: "auto"
                  }}
                  icon={["fas", "times"]}
                />
              }
            </div>
          </div>
          <div className={footer}>
            {
              <div
                style={{
                  width: "100vw"
                }}
              >
                <FontAwesomeIcon
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    margin: "auto",
                    color: base,
                    left: "5%"
                  }}
                  onClick={this.goPrev}
                  icon={["fas", "less-than"]}
                />
                <FontAwesomeIcon
                  style={{
                    position: "absolute",
                    top: 0,
                    bottom: 0,
                    margin: "auto",
                    color: base,
                    right: "5%"
                  }}
                  onClick={this.goNext}
                  icon={["fas", "greater-than"]}
                />
              </div>
            }
          </div>
        </MediaQuery>
        <Hammer
          onPanStart={this.onPanStart}
          onPan={this.onPan}
          onPanEnd={this.onPanEnd}
        >
          <div
            className={modal.modal}
            style={{
              transform: "translateX(" + ease(this.state.deltaX) * 3 + "px)"
            }}
          >
            <LargeClip
              style={{
                display: "inline-block"
              }}
              className={modal.LargeClip}
              ext={LargeClipImgurl.split(".")[1]}
              img={LargeClipImgurl}
              imgClass={modal.image}
              videoClass={modal.video}
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
                      classes={modal}
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
            <div className={modal.card}>
              <div className={modal.title}>{name}</div>
              <div className={modal.date}>{date}</div>
              <div className={modal.description}>{description}</div>
              <div className={modal.links}>
                {links.map((link, i) => {
                  return (
                    <React.Fragment key={i}>
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={linkClass}
                      >
                        {link.name}
                        <FontAwesomeIcon
                          style={{ fontSize: 10 }}
                          icon={["fas", "external-link-alt"]}
                        ></FontAwesomeIcon>
                      </a>
                      <br></br>
                    </React.Fragment>
                  );
                })}
              </div>
              <div style={{ height: 32 }} />
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
        width: "15vmin",
        height: "15vmin",
        maxWidth: 70,
        maxHeight: 70,
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
            background: base,
            boxShadow: isDisplaying && "0 0 0 2px" + menubar2
          }}
        >
          <FontAwesomeIcon
            className={classes.pleyIconSound}
            icon={["fab", "soundcloud"]}
          />
        </div>
      )}
    </div>
  );
};
