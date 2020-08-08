import { d, w, useId, useRegex } from '../common/util';
import { setClasses } from '../module/setClasses';
require('intersection-observer');
import objectFitImages from 'object-fit-images';
objectFitImages();
import anime from 'animejs';
import hamburgerMenu from '../common/hamburgerMenu';
import backgroundMouseMove from '../top/backgroundMouseMove';
import slidePartsActive from '../top/slidePartsActive';
import fullScreenScroll from '../top/fullScreenScroll';
import inViewAbout from '../about/inViewAbout';
import Barba from "barba.js";


// barba.js 対象クリック要素
let barbaLink;
Barba.Dispatcher.on('linkClicked', (element) => {
  barbaLink = element;
});


// barba.js ページ遷移アニメーション
const normalTransition = Barba.BaseTransition.extend({
  start: function() {
    this.newContainerLoading.then(this.finish.bind(this));
  },
  finish: function() {
    d.body.scrollTop = 0;
    this.done();
  }
});

const backArrowTransition = Barba.BaseTransition.extend({
  start: function () {
    this.move().then(this.removeClasses).then(this.newContainerLoading).then(this.finish.bind(this));
  },
  move: function () {
    const scrollTop = d.documentElement.scrollTop || d.body.scrollTop;
    if (scrollTop === 0) {
      return new Promise(function (resolve) {
        resolve();
      });
    } else {
      return new Promise(function (resolve) {
        anime.remove("html, body");
        anime({
          targets: "html, body",
          scrollTop: 0,
          dulation: 600,
          easing: 'easeOutCubic',
          complete: function () {
            resolve();
          }
        });
      });
    };
  },
  removeClasses: function () {
    return new Promise(function (resolve) {
      setClasses(d.querySelectorAll('#js_hero .js_active'), 'remove', 'is_active');
      setTimeout(() => {
        setClasses(d.querySelectorAll('#about .js_fromAnother'), 'add', 'is_active');
        setClasses(d.querySelector('#about .js_btn'), 'add', 'is_position');
        setClasses(d.getElementById('js_currentNav'), 'add', 'is_active');
      }, 500);
      setTimeout(() => {
        resolve();
      }, 1600);
    });
  },
  finish: function () {
    this.done();
  }
});

Barba.Pjax.getTransition = () => {
  let transition;
  if (barbaLink == d.getElementById('js_arrowButton') || barbaLink == d.getElementById('js_topBack')) {
    transition = backArrowTransition;
  } else {
    transition = normalTransition;
  }
  return transition;
};


/** ページ毎の処理
 * @property {object} all 共通部分
 * @property {object} top index.html
 * @property {object} about about.html
 */
const pageType = {
  all: () => {
    d.body.classList.add('is_curtain');
    setTimeout(() => {
      d.body.classList.add('is_init');
    },600);
    hamburgerMenu();
    d.querySelector('.js_instagram').classList[useId.top ? 'add' : 'remove']('is_hide');
    d.getElementById('js_topBack').addEventListener('click', () => {
      if (useRegex.pathTop.test(location.href)) {
        location.hash = '';
        location.reload();
      }
    });
  },
  top: () => {
    slidePartsActive();
    fullScreenScroll();
    backgroundMouseMove();
    setTimeout(() => { useId.header.classList.remove('is_intersection'); }, 100);
  },
  about: () => {
    setClasses(d.querySelectorAll('#js_hero .js_active'), 'add', 'is_active');
    inViewAbout();
    setTimeout(() => { scrollTo(0, 0); });
  }
}


// barba.js 遷移分岐用
let getNameSpace = d.querySelector('.barba-container').getAttribute('data-namespace');
let nameSpaceType = Barba.BaseView.extend({
  namespace: getNameSpace,
  onEnterCompleted: () => {
    pageType[getNameSpace]();
  }
});
nameSpaceType.init();


// Barba要素クリック時に、遷移先のコンテナー追加されたらnamespace再代入
Barba.Dispatcher.on('linkClicked', () => {
  Barba.Dispatcher.on('newPageReady', function(currentStatus) {
    getNameSpace = currentStatus.namespace;
    nameSpaceType = Barba.BaseView.extend({
      namespace: getNameSpace,
      onEnterCompleted: () => {
        pageType[getNameSpace]();
      }
    });
    nameSpaceType.init();
  });
});


// ページの初回表示用
const init = () => {
  Barba.Pjax.start();
  Barba.Prefetch.init();
  pageType.all();
}
w.addEventListener('load', init);


// 新しい要素が読み込まれ、コンテナ要素に挿入されたとき
Barba.Dispatcher.on('newPageReady', (currentStatus, oldStatus, container, newPageRawHTML) => {
  if (Barba.HistoryManager.history.length === 1) {
    return;
  }
  // headタグ差し替え
  const head = d.head,
    newPageRawHead = newPageRawHTML.match(/<head[^>]*>([\s\S.]*)<\/head>/i)[0],
    newPageHead = d.createElement('head');
  newPageHead.innerHTML = newPageRawHead;
  const headTags = [
    "meta[name='description']",
    "meta[property^='og']"
  ].join(',');
  const oldHeadTags = head.querySelectorAll(headTags);
  for (let i = 0; i < oldHeadTags.length; i++) {
    head.removeChild(oldHeadTags[i]);
  }
  let newHeadTags = newPageHead.querySelectorAll(headTags);
  for (let i = 0; i < newHeadTags.length; i++) {
    head.appendChild(newHeadTags[i]);
  }
});


// URLに#有りでも有効 参考:https://www.willstyle.co.jp/blog/1722/
Barba.Pjax.originalPreventCheck = Barba.Pjax.preventCheck;
Barba.Pjax.preventCheck = (evt, element) => {
  if (!element) return;
  if (element) {
    const url = location.protocol + '//' + location.host + location.pathname;
    const extract_hash = element.href.replace(/#.*$/,"");
    if (element.href.startsWith(location.protocol + '//' + location.host)) {
      if (element.href.indexOf('#') > -1 &&  extract_hash != url ){
        return true;
      }
    }
    if (element.classList.contains('js_noBarba')) {
      return false;
    }
  }
  return true;
}