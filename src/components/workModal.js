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
              <div key={i}>
                {ext === "mp4" ? (
                  <video
                    controls
                    style={{
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
                    }}
                  >
                    <source src="resource/img/boss.mp4"></source>
                    再生できません
                  </video>
                ) : (
                  <div
                    className={this.props.classes.image}
                    style={{
                      backgroundImage: "url(" + img + ")",
                      height: "50vmax",
                      maxHeight: "70vmin"
                    }}
                  />
                )}
              </div>
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
