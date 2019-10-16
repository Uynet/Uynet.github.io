import React from "react";
import axios from "axios";
import { API } from "../utils/api.js";

class LoginButton extends React.Component {
  twitterAuth() {
    axios.get(API.TWITTER_AUTH).then(res => {});
  }
  render() {
    return (
      <span className="login">
        <a href="http://127.0.0.1:3001/auth/twitter">ログイン</a>
      </span>
    );
  }
}
export default LoginButton;
