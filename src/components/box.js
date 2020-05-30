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
import profile from "./style/profile.module.scss";
import Award from "./award.js";

const bio =
"フリーです。準備中"
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
          <div className={profile.bio}>{bio}</div>
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
                  <div>誕生日</div>
                  <div>1996/12/19</div>
                  <div>学歴</div>
                  <div>2019 東京工業大学 工学部 情報工学科 卒</div>
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
                ほか
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
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Box);
