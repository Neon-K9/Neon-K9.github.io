import {d, w, top, about, header, logoReload, querySliceCall} from '../common/util';
require('intersection-observer');
import objectFitImages from 'object-fit-images';
objectFitImages();
import anime from 'animejs';
import hamburgerMenu from '../common/hamburgerMenu';
import backgroundMouseMove from '../top/backgroundMouseMove';
import active from '../top/active';
import fullScreenScroll from '../top/fullScreenScroll';
import headerTextColor from '../about/headerTextColor';
import progressBar from '../about/progressBar';
import Barba from "barba.js";
Barba.Pjax.start();

// ページ毎の処理
const pageType = {
  all: () => {
    logoReload();
    hamburgerMenu();
    d.querySelector('.js_instagram').classList[top ? 'add' : 'remove']('is_hide');
  },
  top: () => {
    active();
    fullScreenScroll();
    backgroundMouseMove();
    setTimeout(() => { header.classList.remove('is_intersection'); });
  },
  about: () => {
    querySliceCall(d.querySelectorAll('.js_active')).forEach((val) => {
      val.classList.add('is_active');
    });
    headerTextColor();
    w.addEventListener('scroll', progressBar);
    setTimeout(() => { scrollTo(0, 0); });

    /** ヒーローエリアの左矢印ボタンの処理 */
    (() => {
      let pageScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      let scrollFlag = false;
      w.addEventListener('scroll', () => {
        pageScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollFlag && pageScrollTop === 0) {
          d.getElementById('js_arrowButton').click();
        }
      });
      d.getElementById('js_arrowButton').addEventListener('click', (e) => {
        if (pageScrollTop === 0) return;
        e.preventDefault();
        e.stopPropagation();
        anime.remove("html, body");
        anime({
          targets: "html, body",
          scrollTop: 0,
          dulation: 600,
          easing: 'easeOutCubic',
        });
        scrollFlag = true;
      });
    })();
  }
}

// barba.js遷移の分岐用
const pageTop = Barba.BaseView.extend({
  namespace: 'top',
  onEnterCompleted: function() {
    pageType.top();
  },
  onLeave: function () {
  },
  onLeaveCompleted: function() {
  }
});
const pageAbout = Barba.BaseView.extend({
  namespace: 'about',
  onEnter: function() {
  },
  onEnterCompleted: function() {
    pageType.about();
  },
  onLeave: function () {
  },
  onLeaveCompleted: function() {
  }
});
const checkPage = () => {
  pageTop.init();
  pageAbout.init();
}

// ページの初回表示用
const init = () => {
  if (top) {
    pageType.top();
  } else if (about) {
    pageType.about();
  }
  pageType.all();
  d.body.classList.add('is_init');
}
w.addEventListener('load', init);

// 新しい要素が読み込まれ、コンテナ要素に挿入されたとき
Barba.Dispatcher.on('newPageReady', function (currentStatus, oldStatus, container, newPageRawHTML) {
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
Barba.Pjax.preventCheck = function (evt, element) {
  if (element) {
    const url = location.protocol + '//' + location.host + location.pathname;
    const extract_hash = element.href.replace(/#.*$/,"");
    if (element.href.startsWith(location.protocol + '//' + location.host)) {
      if (element.href.indexOf('#') > -1 &&  extract_hash != url ){
        return true;
      }
    }
  }
  return true;
}

// pjax対象のリンクをクリックした時。
Barba.Dispatcher.on('linkClicked', function () {
  checkPage();
});