import React from "react";
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
    marginLeft: 10
  },
  title: {
    fontSize: 40,
    // fontFamily: "honoka",
    //background: menubar,
    textAlign: "center",
    fontWeight: "bold",
    color: itemColor,
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
  render() {
    const { name, imgurl, link, tags, description } = this.props.work;

    return (
      <React.Fragment>
        <div className={this.props.classes.modal}>
          {imgurl.map((img, i) => {
            const ext = img.split(".")[1];
            return (
              this.state.imgLoc === i && (
                <LargeClip
                  key={i}
                  ext={ext}
                  img={img}
                  imgClass={this.props.classes.image}
                  videoClass={this.props.classes.image}
                />
              )
            );
          })}
          <div className={this.props.classes.card}>
            <div className={this.props.classes.title}>{name}</div>
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
