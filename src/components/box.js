import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import Tag from "./tag.js";
import { modalBG, main, font, accent } from "../utils/colors.js";
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
    fontSize: 24,
    fontWeight: "bold"
  },
  content: {
    lineHeight: 1.4,
    //background: modalBG,
    //border: "dotted 3px " + accent,
    fontFamily: "honoka",
    borderRadius: 12,
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
            style={{
              opacity: 0,
              animation: "fadeIn  ease 0.6s forwards",
              animationDelay: this.getDelay(),
              width: "80vw"
            }}
          >
            <div className={this.props.classes.card}>
              <div className={this.props.classes.title}>Profile</div>
              <div className={this.props.classes.content}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gridColumnGap: 8,
                    alignItems: "center"
                  }}
                >
                  <div>HN</div>
                  <div>uynet(ゆいねっと)</div>
                  <div>BIRTH</div>
                  <div>1996/12/19</div>
                  <div>ORG</div>
                  <div>東京工業大学/情報理工学院M1</div>
                </div>
              </div>
            </div>

            <div className={this.props.classes.card}>
              <div className={this.props.classes.title}>実績等</div>
              <div className={this.props.classes.content}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gridColumnGap: 8,
                    alignItems: "center"
                  }}
                >
                  <div> GoogleIGF2018 </div>
                  <div>
                    <a href="https://www.titech.ac.jp/news/2018/043127.html">
                      Top10入賞
                      <FontAwesomeIcon
                        style={{ fontSize: 10 }}
                        icon={["fas", "external-link-alt"]}
                      ></FontAwesomeIcon>
                    </a>
                  </div>

                  <div>DeNAサマーインターン2018 </div>
                  <div>
                    {" "}
                    <a href="https://twitter.com/uynet/status/1034010674475585537">
                      ゲームエンジニアリングコース参加/優勝
                      <FontAwesomeIcon
                        style={{ fontSize: 10 }}
                        icon={["fas", "external-link-alt"]}
                      ></FontAwesomeIcon>
                    </a>
                  </div>

                  <div> U22プログラミングコンテスト2018</div>
                  <div>
                    <a href="https://www.titech.ac.jp/news/2019/043553.html">
                      経済産業大臣賞(プロダクト)
                      <FontAwesomeIcon
                        style={{ fontSize: 10 }}
                        icon={["fas", "external-link-alt"]}
                      ></FontAwesomeIcon>
                    </a>
                  </div>
                  <div></div>
                  <div>
                    <a href="https://www.bcnaward.jp/itjr/winning/date=2019">
                      BCN ITジュニア賞2019
                      <FontAwesomeIcon
                        style={{ fontSize: 10 }}
                        icon={["fas", "external-link-alt"]}
                      ></FontAwesomeIcon>
                    </a>
                  </div>
                  <div>ピクシブ株式会社</div>
                  <div>選考インターン参加</div>
                </div>
              </div>
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
                PIXI.JS/webGL/OpenGL/GLSL/
                <br />
                Java/C++ vim
                <br />
              </div>
            </div>
            <div className={this.props.classes.card}>
              <div className={this.props.classes.title}>リンク</div>
              <div className={this.props.classes.content}>
                <a href="http://github.com/Uynet">
                  github
                  <FontAwesomeIcon
                    style={{ fontSize: 10 }}
                    icon={["fas", "external-link-alt"]}
                  ></FontAwesomeIcon>
                </a>
                <br />
                <a href="http://twitter.com/uynet">
                  twitter
                  <FontAwesomeIcon
                    style={{ fontSize: 10 }}
                    icon={["fas", "external-link-alt"]}
                  ></FontAwesomeIcon>
                </a>
                <br />
                <a href="https://soundcloud.com/saihate-1">
                  soundcloud
                  <FontAwesomeIcon
                    style={{ fontSize: 10 }}
                    icon={["fas", "external-link-alt"]}
                  ></FontAwesomeIcon>
                </a>
                <br />
                <a href="https://www.pixiv.net/fanbox/creator/4180713">
                  PIXIV FANBOX
                  <FontAwesomeIcon
                    style={{ fontSize: 10 }}
                    icon={["fas", "external-link-alt"]}
                  ></FontAwesomeIcon>
                </a>
                <br />
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Box);
