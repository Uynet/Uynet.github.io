import React from "react";
import { withStyles } from "@material-ui/core/styles";
import award from "./style/award.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const s = {};

class Award extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  handleClick = e => {
    this.ref.current.toggleOpen();
  };
  render() {
    const { name, description, image, link } = this.props;
    console.log(link);
    return (
      <React.Fragment>
        <div className={award.award}>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <div
              className={award.image}
              style={{ backgroundImage: "url(" + image + ")" }}
            >
              <div className={award.name}>{name}</div>
            </div>
          </a>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Award);
