import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import Tag from "./tag.js";
import { main, font } from "../utils/colors.js";
import about from "./style/about.module.scss";

const bio =
  "主にプログラミングで創作をしています。作曲、デザイン、ゲーム制作などが好きです。エンジニアというよりクリエータに近いかもしれません。";
const s = {
  frame: {
    // background: "#fff",
    margin: "0px 10%",
    textAlign: "left",
    display: "inline-block",
    poasition: "relative",
    color: font
  },
  card: {
    opacity: 0,
    width: "80vw",
    padding: "20px 0px",
    animation: "fadeIn  ease 0.6s forwards"
  },
  title: {
    color: main,
    fontSize: 20,
    fontWeight: "bold"
  },
  content: {
    fontFamily: "honoka",
    fontSize: 15,
    paddingLeft: 15
  }
};

class Box extends React.Component {
  getDelay = () => {
    return "2.0s";
  };
  render() {
    // const tags = ["ゲーム制作", "webデザイン", "作曲"];
    return (
      <React.Fragment>
        <div className={this.props.classes.frame}>
          <div className={about.bio}>{bio}</div>
          <div
            className={this.props.classes.card}
            style={{ animationDelay: this.getDelay() }}
          >
            <div className={this.props.classes.title}>Profile</div>
            <div className={this.props.classes.content}>
              <table border="0">
                <tbody>
                  <tr>
                    <th></th>
                    <th></th>
                  </tr>
                  <tr>
                    <td>BIRTH</td>
                    <td></td>
                    <td>1996/12/19</td>
                  </tr>
                  <tr>
                    <td>ORG </td>
                    <td></td>
                    <td>東京工業大学/情報理工学院M1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className={this.props.classes.card}>
              <div className={this.props.classes.title}>実績等</div>
              <div className={this.props.classes.content}>
                <table border="0">
                  <tbody>
                    <tr>
                      <th></th>
                      <th></th>
                    </tr>
                    <tr>
                      <td>GoogleIGF2018</td>
                      <td></td>
                      <td>
                        <a href="https://www.titech.ac.jp/news/2018/043127.html">
                          Top10入賞
                          <FontAwesomeIcon
                            style={{ fontSize: 10 }}
                            icon={["fas", "external-link-alt"]}
                          ></FontAwesomeIcon>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>DeNA2018サマーインターン</td>
                      <td></td>
                      <td>ゲームエンジニアリングコース参加/優勝</td>
                    </tr>
                    <tr>
                      <td>U22プログラミングコンテスト2018</td>
                      <td></td>
                      <td>
                        <a href="https://www.titech.ac.jp/news/2019/043553.html">
                          経済産業大臣賞(プロダクト)
                          <FontAwesomeIcon
                            style={{ fontSize: 10 }}
                            icon={["fas", "external-link-alt"]}
                          ></FontAwesomeIcon>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td>ピクシブ株式会社</td>
                      <td></td>
                      <td>選考インターン参加</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className={this.props.classes.card}>
                <div className={this.props.classes.title}>できること</div>
                <div className={this.props.classes.content}>
                  ゲーム制作
                  <br />
                  webデザイン
                  <br />
                  作曲
                  <br />
                  JavaScript/TypeScript/NodeJS/
                  <br />
                  HTML/CSS/SCSS/React
                  <br />
                  PIXI.JS/webGL/OpenGL/GLSL/Unity/
                  <br />
                  Java/C++ vim
                  <br />
                  {/*tags.map((tag, i) => {
                    return <Tag key={i} name={tag} />;
                  })*/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Box);
