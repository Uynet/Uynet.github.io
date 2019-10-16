import { API } from "../utils/api.js";
import React from "react";
import axios from "axios";
import Color from "./color";
import ColorPicker from "./colorPicker";
import PalletName from "./palletName";

const mainColor = "200050";
const hilightColor = "f3b000";
const baseColor = "30a0c0";
const accentColor = "ef1f6a";

class NewPostForm extends React.Component {
  constructor(props) {
    super(props);
    this.children = [];
    this.state = {
      id: -1,
      name: "風鈴",
      colors: [mainColor, hilightColor, baseColor, accentColor],
      selectColorKey: -1
    };

    axios.get(API.COUNTPOSTS).then(res => {
      this.setState({ id: res.data });
      console.log(res.data);
    });

    this.postToServer = this.postToServer.bind(this);
  }
  async postToServer(event) {
    let params = new URLSearchParams();

    const colorCodeList = this.children.map(c => c.state.color);
    console.log(colorCodeList);

    params.append("name", this.state.name);
    params.append("colors", colorCodeList);
    params.append("ID", this.state.id);
    console.log(this.state);
    axios.post(API.NEW_POST_API, params).then(res => {
      console.log(res.data);
    });
    window.location.assign("/"); // または
    event.preventDefault();
  }
  onSelect = colorKey => {
    this.setState({ selectColorKey: colorKey });
    this.colorPicker.onSelect(colorKey);
    this.children.forEach((color, i) => {
      color.setState({ isSelected: i === colorKey });
    });
  };
  addChildRef = child => {
    this.children.push(child);
  };
  addColorPickerRef = child => {
    this.colorPicker = child;
  };
  getColorCode = colorKey => {
    return this.children[colorKey].state.color;
  };
  setColorCode = (colorKey, colorCode) => {
    console.log(colorKey);
    this.children[colorKey].setState({ color: colorCode });
  };
  setPalletName = palletname => {
    this.setState({ name: palletname });
  };
  render() {
    return (
      <div align="center">
        <div className="centerCollumn">
          <div className="colors">
            {this.state.colors.map((color, i) => {
              return (
                <Color
                  color={color}
                  id={i}
                  key={i}
                  onSelect={this.onSelect}
                  onInit={this.addChildRef}
                />
              );
            })}
          </div>
          <ColorPicker
            onInit={this.addColorPickerRef}
            getColorCode={this.getColorCode}
            setColorCode={this.setColorCode}
          />
          <PalletName setPalletName={this.setPalletName} />
          <div onClick={this.postToServer}>投稿</div>
        </div>
      </div>
    );
  }
}
export default NewPostForm;
