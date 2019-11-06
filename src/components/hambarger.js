import React from "react";
import { withStyles } from "@material-ui/core/styles";

const s = {};

const base = "#FFCBD1";
const main = "#FF165C";

class Hamberger extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
  }
  onClick = e => {
    this.setState({ isOpen: !this.state.isOpen });
    this.props.onClick();
  };
  render() {
    console.log(this.ref);
    const color = this.state.isOpen ? base : main;
    const content = this.state.isOpen ? "×" : "≡";
    return (
      <React.Fragment>
        <div style={{ position: "absolute", top: 20, right: 40, zIndex: 10 }}>
          <div
            style={{
              width: 32,
              height: 32,
              borderRadius: 4,
              borderStyle: "solid",
              borderWidth: 2,
              borderColor: color
            }}
            onClick={this.onClick}
          >
            <div
              style={{
                position: "absolute",
                color: color,
                fontSize: 18,
                left: "50%",
                top: "50%",
                transform: "translate(-50%,-50%)",
                margin: "0 auto"
              }}
            >
              {content}
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Hamberger);
