import React from "react";

class PalletName extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "名もなき色", isEditable: false };
  }
  onBlur = e => {
    this.setState({ isEditable: false });
    this.props.setPalletName(this.state.name);
  };
  onClick = e => {
    this.setState({ isEditable: true });
    this.render();
  };
  onChange = e => {
    this.setState({ name: e.target.value });
  };
  render() {
    return (
      <div>
        {this.state.isEditable ? (
          <input
            onBlur={this.onBlur}
            type="text"
            placeholder={"いろのなまえ"}
            className="palletName"
            onChange={this.onChange}
          ></input>
        ) : (
          <div onClick={this.onClick} className="palletName">
            {this.state.name}
          </div>
        )}
      </div>
    );
  }
}
export default PalletName;
