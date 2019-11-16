import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import Tag from "./tag.js";
import {
  itemColor,
  menubar,
  menubar2,
  modalBG,
  main,
  font,
  accent,
  base
} from "../utils/colors.js";
import about from "./style/about.module.scss";
import Award from "./award.js";

const bio =
  "主にプログラミングで創作をしています。作曲、デザイン、ゲーム制作などが好きで、エンジニアというよりクリエータに近いです。3D技術やゲーム関連などに興味があります";
const s = {
  frame: {
    // background: "#fff",
    margin: "0px 10%",
    textAlign: "left",
    display: "inline-block",
    poasition: "relative",
    maxWidth: 800,
    color: font
  },
  card: {
    opacity: 0,
    position: "relative",
    width: "100%",
    padding: "20px 0px",
    animation: "fadeIn  ease 0.6s forwards"
  },
  title: {
    color: main,
    fontSize: 24,
    position: "relative",
    width: "100%",
    fontWeight: "bold"
  },
  content: {
    position: "relative",
    width: "100%",
    lineHeight: 1.4,
    //background: modalBG,
    //border: "dotted 3px " + accent,
    //fontFamily: "honoka",
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
              animationDelay: this.getDelay()
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
                <Award
                  image={"resource/img/kawasemi2.png"}
                  name={"U22プログラミングコンテスト2018/経済産業大臣賞"}
                  description={
                    "個人制作ゲームが22歳以下のプログラミングコンテストで総勢460作品1500人の中から4作品に与えられる最高賞の経済産業大臣賞を受賞する"
                  }
                  link={"https://www.titech.ac.jp/news/2019/043553.html"}
                />
                <Award
                  image={"resource/img/ninja.png"}
                  name={"GoogleIGF2018/Top10入賞"}
                  description={
                    "サークルでチーム制作したスマホゲームがGoogleのゲームコンテストで入賞し大学ニュースに掲載される"
                  }
                  link={"https://www.titech.ac.jp/news/2018/043127.html"}
                />
                <Award
                  image={"resource/img/dena.png"}
                  name={"DeNAサマーインターン2018/優勝"}
                  description={
                    "3日間でゲーム開発を行いクオリティを競うゲームエンジニアリングコースのインターンで優勝"
                  }
                  link={"https://twitter.com/uynet/status/1034010674475585537"}
                />
                ほかにも...
                <div style={{ paddingLeft: 16 }}>
                  <div>
                    <a href="https://www.bcnaward.jp/itjr/winning/date=2019">
                      BCN ITジュニア賞2019
                      <FontAwesomeIcon
                        style={{ fontSize: 10 }}
                        icon={["fas", "external-link-alt"]}
                      ></FontAwesomeIcon>
                    </a>
                  </div>
                  <div>ピクシブ株式会社 選考インターン参加</div>
                </div>
                など
              </div>
            </div>

            <div className={this.props.classes.card}>
              <div className={this.props.classes.title}>できること</div>
              <div className={this.props.classes.content}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "auto 1fr",
                    gridGap: 10
                  }}
                >
                  <div
                    style={{
                      fontWeight: "bold",
                      color: itemColor
                    }}
                  >
                    ゲーム制作
                  </div>
                  <div>
                    音楽だけやっていたころから含めると8年くらいゲーム制作に関わっています。表現やUXが得意ですが実はアーキテクチャを考えるのも好きです。
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      color: itemColor
                    }}
                  >
                    作曲
                  </div>
                  <div>
                    Cubase10を使っています。9年くらいやっていて、ピアノが弾けます。作品は
                    worksを参照
                  </div>
                  <div
                    style={{
                      fontWeight: "bold",
                      color: itemColor
                    }}
                  >
                    デザイン
                  </div>
                  <div>少なくともこんな感じのサイトが作れます。色が好き</div>
                  <div
                    style={{
                      fontWeight: "bold",
                      color: itemColor
                    }}
                  >
                    3DCG(技術)
                  </div>
                  <div>
                    レンダリングが研究分野で、グラフィックスパイプラインやシェーダの技術的な基礎知識があります。最近xR関連のバイトを始めました
                  </div>
                </div>
              </div>
            </div>

            <div className={this.props.classes.card}>
              <div className={this.props.classes.title}>
                言語/フレームワーク
              </div>
              <div className={this.props.classes.content}>
                <br />
                JavaScript/TypeScript/NodeJS/
                <br />
                HTML/CSS/SCSS/React
                <br />
                PIXI.JS/webGL/OpenGL/GLSL/
                <br />
                Java/C++
                <br />
              </div>
            </div>
            <div className={this.props.classes.card}>
              <div className={this.props.classes.title}>エディタ</div>
              <div className={this.props.classes.content}>vim / VSCODE</div>
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
          <hr
            style={{
              border: "none",
              margin: 20,
              borderTop: "dashed 2px " + menubar2
            }}
          />
          <div
            style={{
              fontWeight: "bold",
              color: menubar2,
              fontSize: 38,
              margin: 10,
              textAlign: "center",
              fontFamily: "Nico Moji"
            }}
          ></div>
          <div
            style={{
              textAlign: "center",
              lineHeight: 1
              //fontFamily: "honoka",
            }}
          >
            就活してます
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Box);
