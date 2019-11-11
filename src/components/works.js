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

const genWork = (name, imgurls, links, tags, description, date) => {
  return {
    name: name,
    imgurls: imgurls,
    links: links,
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
          "resource/img/kawasemi3.png",
          "resource/img/boss.mp4"
        ],
        [
          { name: "ゲームURL", url: "http://kawasemi.uynet.trap.show" },
          {
            name: "大学ニュース記事",
            url: "https://www.titech.ac.jp/news/2019/043553.html"
          }
        ],
        ["Game", "Program", "Graphic", "Sound"],
        "自分のプロダクトの中で最強のブラウザゲーム。ほぼ全てのリソースが個人による開発で、JavaScript一万行以上のゲームフレームワーク構築、アートディレクション、フォント制作、楽曲、サウンド制作などを一人で行なっている。動産環境はPC(Chromeのみ)。2018年U22プログラミングコンテスト経済産業大臣賞(プロダクト)受賞作品。",
        "2018/1~"
      ),
      genWork(
        "NinjaFlicker",
        ["resource/img/ninja.png", "resource/img/ninja2.png"],

        [
          { name: "作品記事", url: "https://trap.jp/post/480/" },
          {
            name: "大学ニュース記事",
            url: "https://github.com/Uynet/palletclub_client"
          },
          {
            name: "[IOS]",
            url:
              "https://itunes.apple.com/jp/app/ninja-flicker/id1330300477?mt=8"
          },
          {
            name: "[Android]",
            url:
              "https://play.google.com/store/apps/details?id=com.traP.ninjaflicker"
          }
        ],
        ["Game", "Graphic", "Sound"],
        "大学サークルのチームで約1年半かけて制作したスマホプラットフォーマーアクション。「背景をフリックする」をコンセプトに主人公である忍者を操作し、 テクニカルに忍術を駆使し数々の困難が待ち受ける城を攻略する。全6曲の音楽、効果音のすべてと一部のグラフィックデザイン、敵AI二体のプログラムに貢献しスタイリッシュな和の世界観を彩った。2018年のGoogleIndieGameFesでTop10に入賞し、大学記事に掲載される(自分は写ってない)。IOS,Androidで配信中(240円)",
        "2016/6~2017/12"
      ),
      genWork(
        "ぱれっと倶楽部(制作中)",
        [
          "resource/img/pallet.png",
          "resource/img/pallet2.png",
          "resource/img/pallet3.png"
        ],
        [
          { name: "進捗ノート", url: "https://shinchoku.net/notes/43347" },
          {
            name: "GitHub(client)",
            url: "https://github.com/Uynet/palletclub_client"
          },
          {
            name: "GitHub(server)",
            url: "https://github.com/Uynet/palletclub_server"
          }
        ],
        ["Web"],
        "色彩設計が好きなので配色投稿サービスを作ることに。開発メンバーは二人で、自分はフロントエンド、APIサーバ、Twitter認証のほとんどを書いてもう一人がインフラ周りを担当。世界のどこかで試験運用中。React,Express,MongoDB,Nginxなど",
        "2019/10~"
      ),
      genWork(
        "CPCTF Visualizer",
        ["resource/img/visualizer.png"],
        [
          { name: "作品解説記事", url: "https://trap.jp/post/697/" },
          { name: "当日レプリカ", url: "http://visualizer.uynet.trap.show/" }
        ],
        ["webGL"],
        "traP恒例新入生歓迎イベントの一つ、オンラインCTF大会のヴィジュアライザ。よくあるサイバーダークに対抗して、ポップでクールな雰囲気を目指した。勉強と技術展示も兼ねてThreeJSでなくwebGLでレンダラを制作した。得点が入るとかっこいいエフェクトが発生する。元ネタはOZ(サマーウォーズ)",
        "2019/2~2019/4"
      ),
      genWork(
        "ゆいブログ",
        ["resource/img/portfolio.png", "resource/img/web.png"],
        [],
        ["Web", "Design"],
        "最高のポートフォリオをつくりたい。初代はvue,今はReactで作り直したもの。画像2枚目は初代バージョンの背景で、絵も自作です。そういえばブログではない",
        "2019/11"
      )
    ];
    const tips = [
      genWork(
        "canvasで雷エフェクト",
        ["resource/img/tips/thunder.gif"],
        [
          {
            name: "NEORT",
            url:
              " https://neort.io/art/bmvq9d43p9f7m1g03bdg?index=1&origin=latest"
          },
          {
            name: "作品解説記事",
            url: "https://www.pixiv.net/fanbox/creator/4180713/post/640754"
          }
        ],
        ["Effect"],
        "NEORTを知ったので遊んだ。fillRectだけで雷エフェクトをつくる。こういう作画をゲームで使いたい",
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
        "ゆれ画像メーカー",
        ["resource/img/tips/yure.mp4"],
        [{ name: "リンク", url: "yure.uynet.trap.show" }],
        ["CG"],
        "一時期流行ったアレを作るやつ。思いついてすぐ流行りに乗りたかったのでかなり作りが雑。",
        "2019/09"
      ),

      genWork(
        "四分木空間分割",
        ["resource/img/tips/quad.mp4"],
        [{ name: "動くもの", url: "http://quartenarytree.uynet.trap.show/" }],
        [""],
        "衝突判定がしたかったので前々からやりたかった四分木空間分割を実装したが、見た目がよかったので分割だけして判定までやらずに満足してしまった。",
        "2019/07"
      ),
      genWork(
        "cartoon blur",
        ["resource/img/tips/cartoon1.gif", "resource/img/tips/cartoon2.mp4"],
        [{ name: "shadertoy", url: "https://www.shadertoy.com/view/3sB3zd" }],
        ["CG"],
        "漫画的なモーションブラーをゲームで使いたくて研究中。これは完全に距離感吸うだけのレンダリングで、速度の逆方向に伸ばしたりノイズをかけたりすることによって表現している。",
        "2019/02"
      ),
      genWork(
        "shelAnime",
        ["resource/img/tips/shellAnime.mp4"],
        [{ name: "gitHub", url: "github.com/Uynet/shelAnime" }],
        ["shell"],
        "顔文字がアニメーションするだけのシェル芸....なのだけどちょっとバズって、githubで一番likeがついてしまった。npmで配布していて、npx poyopoyochanでお手元で動きます",
        "2019/01"
      ),
      genWork(
        "スマホ全天球VRするやつ",
        ["resource/img/artc.png"],
        [],
        ["CG"],
        "スマホの重力センサと全天球画像を使ってVRをするアプリ。もともとは文系講義の作品課題で、初めて使うwebGLで悪戦苦闘しながら作った。残念ながら現在はリンク切れ",
        "2018/06"
      ),
      genWork(
        "Raymarch",
        ["resource/img/raitracing.png"],
        [],
        ["CG"],
        "CGの研究室に入る前に入門しておいた。fragment一枚で描く簡単なもの。屈折、反射までやった",
        "2018/04"
      ),
      genWork(
        "花火",
        ["resource/img/tips/hanabi.mp4"],
        [
          {
            name: "リンク",
            url: "https://uynet.github.io/src/Product/e1g/e1g1/"
          }
        ],
        ["canvas"],
        "結構お気に入りのパーティクルエフェクト",
        "2016/08"
      ),
      genWork(
        "Polar Snow Fantasy",
        ["resource/img/po.png", "resource/img/po2.png"],
        [
          {
            name: "作品解説記事",
            url: "https://trap.jp/post/35/"
          },
          {
            name: "動画",
            url: "https://www.nicovideo.jp/watch/sm28103282"
          },
          {
            name: "対戦BGM(そこそこ好評)",
            url: "https://soundcloud.com/saihate-1/pobattle4"
          }
        ],
        ["Web", "Design"],
        "「雪合戦」をコンセプトにしたアクションSTG。足元の雪を使って弾を撃つ。企画および全8曲と一部のグラフィック、ステージ制作を担当したがコードは一行も書いてない。",
        "2015/10~2016/04"
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
          <div className={this.props.classes.categoryString}>Tips</div>
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
