import React from "react";
import BGEffect from "./BGEffect";
import { withStyles } from "@material-ui/core/styles";
import { modalBG, main, menubar } from "../utils/colors.js";
import { overLay } from "./style/home.module.scss";
import Work from "./work.js";
import MediaQuery from "react-responsive";
import Modal from "react-modal";
import WorkModal from "./workModal";
import worksClass from "./style/works.module.scss";
//import customClass from "./style/custom.module.scss";

const s = {};
const customStylesSp = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 40,
    background: modalBG
  },
  content: {
    zIndex: 41,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    overflow: "auto",
    border: "none",
    width: "100%",
    height: "100%",
    animation: "modalOpen cubic-bezier(1,0,0,1) 0.5s forwards",
    overflowY: "auto",
    overscrollBehavior: "none",
    background: modalBG,
    //WebkitOverflowScrolling: "touch",
    padding: 0,
    borderRadius: 0
  },
  ReactModal__BodyOpen: {
    position: "fixed"
  }
};

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 40,
    backgroundColor: "rgba(0, 0 , 0, 0.40)"
  },
  content: {
    zIndex: 41,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    margin: "auto",
    background: modalBG,
    overflow: "auto",
    width: "80%",
    maxWidth: "100vh",
    minWidth: 250,
    height: "88%",
    //WebkitOverflowScrolling: "touch",
    padding: 0,
    borderRadius: 16,
    overscrollBehavior: "none",
    border: "none"
  }
};

const genWork = (category, name, imgurls, links, tags, description, date) => {
  return {
    category: category,
    name: name,
    imgurls: imgurls,
    links: links,
    tags: tags,
    description: description,
    date: date
  };
};

class Products extends React.Component {
  render() {
    return (
      <div className={this.props.frameClass}>
        <div className={worksClass.grid}>
          {this.props.products.map((work, i) => {
            return (
              <Work
                modalIsOpen={this.props.modalIsOpen}
                isFirstTime={this.props.isFirstTime}
                handleClick={this.props.handleClick}
                id={i}
                key={i}
                work={work}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

class Works extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFirstTime: true,
      modalIsOpen: false,
      displayingWork: null,
      products: [],
      tips: [],
      sounds: [],
      allWorks: []
    };
  }
  componentDidMount() {
    this.genWorks();
  }
  goNext = () => {
    const len = this.state.allWorks.length;
    let index = this.state.allWorks.indexOf(this.state.displayingWork);
    this.setState({ displayingWork: this.state.allWorks[(index + 1) % len] });
  };
  goPrev = () => {
    const len = this.state.allWorks.length;
    let index = this.state.allWorks.indexOf(this.state.displayingWork);
    this.setState({
      displayingWork: this.state.allWorks[(len + index - 1) % len]
    });
  };
  handleClick = work => {
    this.openModal(work);
  };
  openModal = work => {
    this.setState({
      modalIsOpen: true,
      displayingWork: work,
      isFirstTime: false
    });
    window.document.body.classList.toggle("no-scroll");
  };
  afterOpenModal = () => {};
  closeModal = () => {
    this.setState({ modalIsOpen: false, displayingWork: null });
    window.document.body.classList.toggle("no-scroll");
  };
  genWorks = () => {
    const products = [
      genWork(
        "Produts",
        "サイハテドロップ",
        [
          "resource/img/kawasemi2.png",
          "resource/img/kawasemi4.png",
          "resource/img/boss.mp4",
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/430954734&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ],
        [
          { name: "ゲームURL", url: "http://kawasemi.uynet.trap.show" },
          {
            name: "大学ニュース記事",
            url: "https://www.titech.ac.jp/news/2019/043553.html"
          }
        ],
        ["Game", "Program", "Graphic", "Sound"],
        "自分のプロダクトの中で最強のブラウザゲーム。ほぼ全てのリソースが個人による開発で、JavaScript一万行以上のゲームフレームワーク構築、アートディレクション、フォント制作、楽曲、サウンド制作などを一人で行なっている。動産環境はPC(Chromeのみ)。2018年U22プログラミングコンテスト経済産業大臣賞(プロダクト)受賞作品。コンテンツが少なくゲームデザインが完成していない部分が課題。",
        "2018/1~"
      ),
      genWork(
        "Produts",
        "NinjaFlicker",
        [
          "resource/img/ninja.png",
          "resource/img/ninja2.png",
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/433185450&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true",
          "https://www.youtube.com/embed/ekiIBCfWgZs"
        ],

        [
          { name: "作品記事", url: "https://trap.jp/post/480/" },
          {
            name: "大学ニュース記事",
            url: "https://www.titech.ac.jp/news/2018/043127.html"
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
        "大学サークルのチームで約1年半かけて制作したスマホプラットフォーマーアクション。「背景をフリックする」をコンセプトに主人公である忍者を操作し、 テクニカルに忍術を駆使し数々の困難が待ち受ける城を攻略する。全6曲の音楽、効果音のすべてと一部のグラフィックデザイン、敵AI二体のプログラムに貢献しスタイリッシュな和の世界観を彩った。2018年のGoogleIndieGameFesでTop10に入賞し、大学記事に掲載される。IOS,Androidで配信中(240円)",
        "2016/6~2017/12"
      ),
      genWork(
        "Produts",
        "CPCTF Visualizer",
        ["resource/img/visualizer.png", "resource/img/visualizer2.png"],
        [
          { name: "作品解説記事", url: "https://trap.jp/post/697/" },
          { name: "当日の再現", url: "http://visualizer.uynet.trap.show/" }
        ],
        ["webGL"],
        "traP恒例新入生歓迎イベントの一つ、オンラインCTF大会のヴィジュアライザ。よくあるサイバーダークに対抗して、ポップでクールな雰囲気を目指し、勉強と技術展示も兼ねてThreeJSでなくwebGLでレンダラを制作した。得点が入るとかっこいいエフェクトが発生する。現在はイベント終了しているが、当日の様子を再現したものを見れるようにしてある。元ネタはOZ(サマーウォーズ)",
        "2019/2~2019/4"
      ),
      genWork(
        "Produts",
        "ゆいブログ",
        ["resource/img/portfolio.png", "resource/img/web.png"],
        [{ name: "github", url: "http://github.com/Uynet/Uynet.github.io" }],
        ["Web", "Design"],
        "ポートフォリオをつくりたい。初代はvue,今はReactで作り直したもの。画像2枚目は初代バージョンの背景で、絵も自作です。そういえばブログではない",
        "2019/11"
      ),
      genWork(
        "Produts",
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
        "色彩設計が好きなので配色投稿サービスを作っています。開発メンバーは二人で、自分はフロントエンド、APIサーバ、認証周りなどほとんどを書いてもう一人がインフラ周りを担当。技術スタック的にはReact,Express,MongoDB,Nginxなど。もうそろそろベータ版がリリースができそう",
        "2019/10~"
      ),
      genWork(
        "Produts",
        "Polar Snow Fantasy",
        [
          "resource/img/po.png",
          "resource/img/po2.png",
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/264092767&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ],
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
        "「雪合戦」をコンセプトにしたアクションSTG。足元の雪を使って弾を撃つ。コードは書いてないが企画および全8曲と一部のグラフィック、ステージ制作を担当した。",
        "2015/10~2016/04"
      )
    ];
    const tips = [
      genWork(
        "Tips",
        "Thunder",
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
        "NEORTを知ったので遊んだ。canvasが使えたので全部fillRectだけど、別にその必要はなくて単に一番簡単だったからです。アニメ作画のテクをいくつか使っています。",
        "2019/11"
      ),
      genWork(
        "Tips",
        "Sparkle",
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
        "NEORTを知ったので遊んだ。ゲームでよく使ってるパーティクル芸で、2Dだけど大きい粒子を遠くに飛ばすことにより立体感を出すテク。",
        "2019/11"
      ),
      genWork(
        "Tips",
        "ゆれ画像メーカー",
        ["resource/img/tips/yure.mp4"],
        [{ name: "リンク", url: "http://yure.uynet.trap.show" }],
        ["CG"],
        "一時期流行ったアレを作るやつ。思いついてすぐ流行りに乗りたかったのでかなり作りが雑。DraggableなUIをcanvasで実装するのが地味に面倒だった。CSSアニメーションで揺らす機能付き",
        "2019/09"
      ),

      genWork(
        "Tips",
        "四分木空間分割",
        ["resource/img/tips/quad.mp4"],
        [{ name: "動くもの", url: "http://quartenarytree.uynet.trap.show/" }],
        [""],
        "衝突判定がしたかったので前々からやりたかった四分木空間分割を実装したが、分割だけして判定までやらずに満足してしまった。それぞれの物体に対して自分を完全に包含する四分木小空間が割り当てられ、空間の大きいほど赤く示している。",
        "2019/07"
      ),
      genWork(
        "Tips",
        "cartoon blur",
        ["resource/img/tips/cartoon1.gif", "resource/img/tips/cartoon2.mp4"],
        [{ name: "shadertoy", url: "https://www.shadertoy.com/view/3sB3zd" }],
        ["CG"],
        "漫画的なモーションブラーをゲームで使いたくてシェーダを研究中。これは距離関数だけのレンダリングで、速度のぶんだけ逆方向に伸ばしたりノイズをかけたりすることによって表現している。",
        "2019/02"
      ),
      genWork(
        "Tips",
        "shelAnime",
        ["resource/img/tips/shellAnime.mp4"],
        [{ name: "gitHub", url: "github.com/Uynet/shelAnime" }],
        ["shell"],
        "顔文字がアニメーションするだけのシェル芸....なのだけどちょっとバズって、githubで一番likeがついてしまった。npmで配布していて、npx poyopoyochanでお手元で動きます",
        "2019/01"
      ),
      genWork(
        "Tips",
        "スマホ全天球VRするやつ",
        ["resource/img/artc.png"],
        [{ name: "リンク", url: "http://artc.uynet.trap.show" }],
        ["CG"],
        "スマホの重力センサと全天球画像を使ってVRっぽいことをするアプリ。もともとは文系講義の作品課題で、初めて使うwebGLで悪戦苦闘しながら作った。浮かんでいるキューブをタップするとシーンが遷移する",
        "2018/06"
      ),
      genWork(
        "Tips",
        "Raymarch",
        ["resource/img/raitracing.png"],
        [],
        ["CG"],
        "CGの研究室に入る前に入門しておいた。fragment一枚で描く簡単なもの。屈折、反射までやった",
        "2018/04"
      ),
      genWork(
        "Tips",
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
      )
    ];
    const sounds = [
      genWork(
        "Sounds",
        "Immortal Flower",
        [
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/318619255&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ],
        [{ name: "Flythm", url: "https://flythm.trap.games" }],
        ["Sound"],
        "サークルで作っているブラウザ音ゲー「Flythm」に提供した作品。自分の曲の中で一番伸びたもの",
        "2017/2"
      ),
      genWork(
        "Sounds",
        "yuki white",
        [
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/561866667&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ],
        [],
        ["Sound"],
        "冬をイメージしたきれいなピアノポップです",
        "2019/1"
      ),
      genWork(
        "Sounds",
        "Stardust",
        [
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/559328304&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ],
        [[{ name: "Flythm", url: "https://flythm.trap.games" }]],
        ["Sound"],
        "Flythmに提供した楽曲。実は制作期間5日と短い。",
        "2018/04"
      ),
      genWork(
        "Sounds",
        "さいはて洞窟",
        [
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/430954734&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ],
        [{ name: "ゲームURL", url: "kawasemi.uynet.trap.show" }],
        ["Sound"],
        "サイハテドロップの元気なchiptune",
        "2018/03"
      ),
      genWork(
        "Sounds",
        "u_u..zZ",
        [
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/633579576&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ],
        [{ name: "作業してくる", url: "http://sitekuru.net" }],
        ["Sound"],
        "普段あまり作らないタイプののんびりしたボサノバ。cagpieさんの作業用BGM企画「作業してくる」に参加させていただいたものです",
        "2017/11"
      ),
      genWork(
        "Sounds",
        "月影",
        [
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/315878423&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ],
        [],
        ["Sound"],
        "NinjaFlickerのステージBGM。海外のindieみたいな洋楽っぽいDubを作ろうとしたが、うるさくてゲーム音楽っぽくはなくなってしまった。読みは「げつえい」です",
        "2017/02"
      ),
      genWork(
        "Sounds",
        "Immortal Qualia",
        [
          "https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/657708683&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
        ],
        [],
        ["Sound"],
        "Immortal Flowerのリメイク的なやつ。SDVX公募に応募して落選した。かなり本気をだしたつもりだけどちょっとやりすぎ感があった",
        "2019/6"
      )
    ];

    this.setState({
      products: products,
      tips: tips,
      sounds: sounds,
      allWorks: [...products, ...tips, ...sounds]
    });
  };
  render() {
    const frameClass = worksClass.frame;
    return (
      <React.Fragment>
        <BGEffect />
        <div
          className={worksClass.header}
          style={{ animationDelay: "0.4s", background: main }}
        ></div>
        <div
          className={worksClass.header}
          style={{ animationDelay: "0.5s", background: "#FF3090" }}
        ></div>
        <div
          className={worksClass.header}
          style={{ animationDelay: "0.6s", background: menubar }}
        ></div>
        <div className={worksClass.title}>
          <div className={worksClass.titleString}>Works</div>
          <div className={worksClass.underLine}></div>
        </div>
        <div className={worksClass.space}></div>

        <MediaQuery query="(max-width: 429px)">
          {/* クリックすると表示される内容 SP*/}
          {this.state.displayingWork !== null && (
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStylesSp}
              overLayClassName={overLay}
              bodyOpenClassName={worksClass.modalbody}
            >
              <WorkModal
                work={this.state.displayingWork}
                goNext={this.goNext}
                goPrev={this.goPrev}
                close={this.closeModal}
              ></WorkModal>
            </Modal>
          )}
        </MediaQuery>

        <MediaQuery query="(min-width: 430px)">
          {/* クリックすると表示される内容 PC*/}
          {this.state.displayingWork !== null && (
            <Modal
              isOpen={this.state.modalIsOpen}
              onAfterOpen={this.afterOpenModal}
              onRequestClose={this.closeModal}
              style={customStyles}
              overLayClassName={overLay}
              bodyOpenClassName={worksClass.modalbody}
            >
              <WorkModal
                work={this.state.displayingWork}
                goNext={this.goNext}
                goPrev={this.goPrev}
                close={this.closeModal}
              ></WorkModal>
            </Modal>
          )}
        </MediaQuery>
        <div className={worksClass.category}>
          <div className={worksClass.categoryString}>Products</div>
          <div className={worksClass.underLine2}></div>
          <div className={worksClass.desc}>主な制作物</div>
        </div>
        <Products
          modalIsOpen={this.state.modalIsOpen}
          isFirstTime={this.state.isFirstTime}
          handleClick={this.handleClick}
          frameClass={frameClass}
          products={this.state.products}
        />
        <div className={worksClass.category}>
          <div className={worksClass.categoryString}>Tips</div>
          <div className={worksClass.underLine2}></div>
          <div className={worksClass.desc}>諸々</div>
        </div>
        <Products
          modalIsOpen={this.state.modalIsOpen}
          isFirstTime={this.state.isFirstTime}
          handleClick={this.handleClick}
          frameClass={frameClass}
          products={this.state.tips}
        />
        <div className={worksClass.category}>
          <div className={worksClass.categoryString}>Sounds</div>
          <div className={worksClass.underLine2}></div>
          <div className={worksClass.desc}>音楽</div>
        </div>
        <Products
          modalIsOpen={this.state.modalIsOpen}
          isFirstTime={this.state.isFirstTime}
          handleClick={this.handleClick}
          frameClass={frameClass}
          products={this.state.sounds}
        />
        <div style={{ textAlign: "center", padding: 50 }}>
          <a href="https://twitter.com/i/moments/981932201557114881">
            もっとみる
          </a>
        </div>
        <div className={worksClass.footerSpace}></div>
      </React.Fragment>
    );
  }
}
export default withStyles(s)(Works);
