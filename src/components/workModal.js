import React, { useState } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  modalBG,
  base,
  font,
  main,
  menubar,
  itemColor
} from "../utils/colors.js";

const s = {
  image: {
    position: "fixed",
    position: "relative",
    top: 0,
    left: 0,
    width: "100%",
    cursor: "pointer",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    boxShadow: "0px 0px 40px 10px rgba(0,0,0,0.5) inset"
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
    height: "50vmax",
    boxShadow: "0px 0px 40px 10px rgba(0,0,0,0.5) inset"
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
    this.state = { imgLoc: 0 }; //表示中のimgのindex
  }
  handleClick = e => {
    this.ref.current.toggleOpen();
  };
  // 小さい方の画像を押すとそれを選択して表示させる
  handleClickSmall = index => {
    this.setState({ imgLoc: index });
  };
  render() {
    const { name, imgurl, link, tags, description, date } = this.props.work;
    const LargeClipImgurl = imgurl[this.state.imgLoc];

    return (
      <React.Fragment>
        <div className={this.props.classes.modal}>
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
          imgurl.length >= 2 &&
            imgurl.map((img, i) => {
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
          <div className={this.props.classes.card}>
            <div className={this.props.classes.title}>{name}</div>
            <div className={this.props.classes.date}>{date}</div>
            <div className={this.props.classes.description}>{description}</div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(WorkModal);

const LargeClip = props => {
  const { img, ext, imgClass, videoClass } = props;
  return (
    <div>
      {ext === "mp4" ? (
        <video controls className={videoClass} src={img} />
      ) : (
        <div
          className={imgClass}
          style={{
            backgroundImage: "url(" + img + ")",
            height: "50vmax",
            maxHeight: "70vmin"
          }}
        />
      )}
    </div>
  );
};

const SmallClip = props => {
  // index:画像index
  // isDisplaying:拡大表示選択している画像のサムネであるかどうか:
  const { img, ext, index, isDisplaying, handleClick } = props;
  const w = 100;
  const h = 100;
  return (
    <div
      style={{ display: "inline-block", cursor: "pointer" }}
      onClick={() => handleClick(index)}
    >
      {ext === "mp4" ? (
        <video
          style={{
            width: w,
            height: h,
            preload: "none",
            border: isDisplaying && "2px solid" + itemColor
          }}
          src={img}
        />
      ) : (
        <div
          style={{
            border: isDisplaying && "2px solid" + itemColor,
            backgroundImage: "url(" + img + ")",
            height: "50vmax",
            width: w,
            height: h,
            maxHeight: "70vmin",
            backgroundSize: "cover",
            backgroundPosition: "center center",
            boxShadow: "0px 0px 40px 10px rgba(0,0,0,0.5) inset"
          }}
        />
      )}
    </div>
  );
};
