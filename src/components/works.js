import React from "react";
import BGEffect from "./BGEffect";
import { withStyles } from "@material-ui/core/styles";
import {
  accent,
  base,
  main,
  font,
  menubar,
  menubar2
} from "../utils/colors.js";
import Work from "./work.js";
import MediaQuery from "react-responsive";

const s = {
  space: { height: 200 },
  footerSpace: { height: 60 },
  frame: {
    // background: "#fff",
    textAlign: "center",
    opacity: 0,
    color: font,
    animation: "fadeIn  ease 0.6s forwards"
  },
  header: {
    position: "absolute",
    zIndex: 2,
    top: 0,
    left: 0,
    width: "100vw",
    height: 0,
    background: main,
    animation: "swipeY cubic-bezier(0, 1, 0, 1) 2.6s forwards"
    //borderBottomColor: accent,
    //borderBottom: "solid 5px"
  },
  title: {
    zIndex: 2,
    position: "relative",
    width: 244,
    textAlign: "center",
    top: 64,
    left: 32
  },
  titleString: {
    zIndex: 2,
    fontFamily: "gkktt",
    fontSize: 80,
    color: accent
  },
  underLine: {
    zIndex: 2,
    height: 8,
    borderRadius: 3,
    background: menubar2,
    left: 0,
    right: 0,
    margin: "auto",
    animation: "swipeX cubic-bezier(0.99, 0.01, 0, 1) 1.6s forwards"
  },
  underLine2: {
    zIndex: 2,
    height: 4,
    borderRadius: 4,
    background: main,
    width: 0,
    left: 0,
    right: 0,
    margin: "auto",
    animation: "swipeX cubic-bezier(0.99, 0.01, 0, 1) 1.6s 1.3s forwards"
  },
  icon: {
    position: "absolute",
    borderRadius: "50%",
    transform: "translate(-50%,-50%)",
    top: 270,
    left: 140,
    // right: 0,
    width: 0,
    height: 0,
    zIndex: 5,
    opacity: 0,
    margin: "auto",
    animation: "iconPop ease  0.4s 1.1s forwards",
    border: "solid 5px",
    borderColor: main
  },
  category: {
    width: 100,
    height: 50,
    opacity: 0,
    margin: "auto",
    marginTop: 40,
    textAlign: "center",
    position: "relative",
    animation: "fadeIn  ease 0.6s 1.0s forwards"
  },
  categoryString: {
    color: main,
    fontWeight: "bold",
    fontFamily: "honoka",
    fontSize: 20
  },
  desc: {
    color: font,
    fontFamily: "honoka",
    margin: 5
  }
};

const genWork = (name, imgurl, link, tags, description, date) => {
  return {
    name: name,
    imgurl: imgurl,
    link: link,
    tags: tags,
    description: description,
    date: date
  };
};
class PC extends React.Component {
  render() {
    return (
      <div className={this.props.frameClass}>
        <div
          style={{
            padding: "4%",
            display: "grid",
            gap: "10px",
            gridTemplateColumns: "1fr 1fr 1fr",
            gridTemplateRows: "auto"
          }}
        >
          {this.props.products.map((work, i) => {
            return <Work id={i} key={i} work={work} />;
          })}
        </div>
      </div>
    );
  }
}

class Smapho extends React.Component {
  render() {
    console.log(this.props.products);
    return (
      <div className={this.props.frameClass}>
        <div
          style={{
            padding: "4%",
            display: "grid",
            gap: "10px",
            gridTemplateColumns: "1fr",
            gridTemplateRows: "auto"
          }}
        >
          {this.props.products.map((work, i) => {
            return <Work id={i} key={i} work={work} />;
          })}
        </div>
      </div>
    );
  }
}

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  handleClick = e => {
    this.ref.current.toggleOpen();
  };
  render() {
    const products = [
      genWork(
        "サイハテドロップ",
        [
          "resource/img/kawasemi2.png",
          "resource/img/kawasemi.png",
          "resource/img/boss.mp4"
        ],
        [{ name: "ゲームURL", url: "http://kawasemi.uynet.trap.show" }],
        ["Game", "Program", "Graphic", "Sound"],
        "自分のプロダクトの中で最強のブラウザゲーム。ほぼ全てのリソースが個人による開発で、JavaScript一万行以上のゲームフレームワーク構築、アートディレクション、フォント制作、楽曲、サウンド制作などを一人で行なっている。設計の書き直しに追われコンテンツが全く作れないのでUnityに移植したい。2018年U22プログラミングコンテスト経済産業大臣賞(プロダクト)受賞作品。",
        "2018/1~"
      ),
      genWork(
        "NinjaFlicker",
        ["resource/img/ninja.png", "resource/img/ninja2.png"],
        "https://trap.jp/post/480/",
        ["Game", "Graphic", "Sound"],
        "大学サークルのチームで学部2年から3年の約1年半かけて制作したスマホプラットフォーマーアクション。「背景をフリックする」をコンセプトに主人公である忍者を操作し、 テクニカルに忍術を駆使し数々の困難が待ち受ける城を攻略する。全6曲の音楽、効果音のすべてと一部のグラフィックデザインに貢献し、モダン×和の世界観を彩った。2018年GoogleIndieGameFesでTop10に入賞し、大学記事に掲載される(自分は写ってない)。IOS,Androidで配信中(240円)",
        "2016/6~2017/12"
      ),
      genWork(
        "ぱれっと倶楽部(制作中)",
        [
          "resource/img/pallet.png",
          "resource/img/pallet2.png",
          "resource/img/pallet3.png"
        ],
        "https://shinchoku.net/notes/43347",
        ["Web"],
        "配色投稿サービスを二人で開発中(2019/10~)。React,Express,MongoDB,Nginxなど",
        "2019/10"
      ),
      genWork(
        "CPCTF Visualizer",
        ["resource/img/visualizer.png"],
        "http://visualizer.uynet.trap.show",
        ["webGL"],
        "traP恒例新入生歓迎イベントの一つ、オンラインCTF大会のヴィジュアライザ。勉強と技術展示も兼ねてThreeJSでなくwebGLでレンダラを制作した。得点が入るとかっこいいエフェクトが発生する",
        "2019/2~2019/4"
      ),
      genWork(
        "ゆいブログ",
        ["resource/img/portfolio.png", "resource/img/uyblog.png"],
        "/",
        ["Web", "Design"],
        "最高のポートフォリオをつくりたい。初代はvue,今はReactで作り直したもの。画像2枚目は初代バージョン。",
        "2019/11"
      )
    ];
    const tips = [
      genWork(
        "canvasで雷エフェクト",
        ["resource/img/tips/thunder.gif"],
        "http://kawasemi.uynet.trap.show",
        ["Effect"],
        "NEORTを知ったので遊んだ。fillRectだけで雷エフェクトをつくる。いくつかばりえーしょんがある",
        "2019/11"
      ),
      genWork(
        "particle芸",
        ["resource/img/tips/sparkle.gif"],
        [
          {
            name: "NEORT",
            url:
              "https://neort.io/art/bmul6pk3p9f7m1g034p0?index=0&origin=my_profile"
          },
          {
            name: "解説記事",
            url: "https://www.pixiv.net/fanbox/manage/post/639990/edit"
          }
        ],
        ["Effect"],
        "NEORTを知ったので遊んだ。ゲームでよく使ってるパーティクル芸で、2Dだけど立体感を出すテク。詳しくは解説記事読んでください",
        "2019/11"
      ),
      genWork(
        "Raymarch",
        ["resource/img/raitracing.png"],
        "",
        ["CG"],
        "CGの研究室に入る前に入門しておいた。fragment一枚で描く一般的なもの。屈折、反射までやった",
        "2019/04"
      )
    ];
    return (
      <React.Fragment>
        <BGEffect />
        <div
          className={this.props.classes.header}
          style={{ animationDelay: "0.4s", background: main }}
        ></div>
        <div
          className={this.props.classes.header}
          style={{ animationDelay: "0.5s", background: "#FF3090" }}
        ></div>
        <div
          className={this.props.classes.header}
          style={{ animationDelay: "0.6s", background: menubar }}
        ></div>
        <div className={this.props.classes.title}>
          <div className={this.props.classes.titleString}>Works</div>
          <div className={this.props.classes.underLine}></div>
        </div>
        <div className={this.props.classes.space}></div>

        <div className={this.props.classes.category}>
          <div className={this.props.classes.categoryString}>Product</div>
          <div className={this.props.classes.underLine2}></div>
          <div className={this.props.classes.desc}>主な制作物</div>
        </div>

        <MediaQuery query="(min-width: 430px)">
          <PC frameClass={this.props.classes.frame} products={products} />
        </MediaQuery>

        <MediaQuery query="(max-width: 429px)">
          <Smapho frameClass={this.props.classes.frame} products={products} />
        </MediaQuery>
        <div className={this.props.classes.category}>
          <div className={this.props.classes.categoryString}>Wips</div>
          <div className={this.props.classes.underLine2}></div>
          <div className={this.props.classes.desc}>諸々</div>
        </div>
        <MediaQuery query="(min-width: 430px)">
          <PC frameClass={this.props.classes.frame} products={tips} />
        </MediaQuery>

        <MediaQuery query="(max-width: 429px)">
          <Smapho frameClass={this.props.classes.frame} products={tips} />
        </MediaQuery>
        <div style={{ textAlign: "center", padding: 50 }}>
          <a href="https://twitter.com/i/moments/981932201557114881">
            もっとみる
          </a>
        </div>

        <div className={this.props.classes.footerSpace}></div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Works);
