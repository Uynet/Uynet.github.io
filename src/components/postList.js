import React from "react";
import { Link } from "react-router-dom";
import PreviewColor from "./previewColor";

class PostList extends React.Component {
  preview(str) {
    if (str.length > 50) {
      str = str.substr(0, 50);
      str += "...";
    }
    return str;
  }
  render() {
    const post = this.props.post;
    const colors = post.colors.split(",");
    return (
      <Link to={"/post/" + post.id}>
        <div className="postList">
          <div className="title">
            {post.name || "名前無し"}
            {colors.map((color, i) => {
              return <PreviewColor color={color} id={i} key={i} />;
            })}
          </div>
        </div>
      </Link>
    );
  }
}
export default PostList;
