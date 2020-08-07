import {d, w, isMobile, querySliceCall} from '../common/util';
export default function () {
  let slideNum = 0; //スライド番号
  let scrollFlag = false; //スライドのスクロールフラグ
  let currentPosition = 0; //スライドの現在位置
  let scrollPosition = 0; //スライドのスクロール量
  let wrapperHeight = 0;
  let windowHeight = innerHeight;
  const slideWrapper = d.getElementById('js_slideWrap'); //各スライドを囲む親要素
  const slide = d.querySelectorAll('.js_slide'); //スライド要素


  /** fullScreenScroll 1画面スクロール関連
   * @property {object} scrollProcessing スクロール方向判定
   * @property {object} scrollEvent scrollProcessing()をイベントリスナーに登録
   * @property {object} scrollHash 表示されたスライドのハッシュに更新
   */
  const fullScreenScroll = {
    scrollProcessing: (event) => {
      // SPとPCで条件文を分岐
      scrollPosition = isMobile ? event.changedTouches[0].pageY : event.deltaY;
      const conditions = isMobile ? scrollPosition > currentPosition : scrollPosition > 0;
      if (!scrollFlag) {
        scrollFlag = true;
        if (conditions) { //下方向
          if (slideNum >= slide.length - 1) {
            slideNum = slide.length - 1; //スライド総数を超えないように代入
          } else {
            slideNum++;
            slideWrapper.style.top = -windowHeight * slideNum + 'px';
          }
        } else { //上方向
          if (slideNum <= 0) { //スライドを0より小さくさせない
            slideNum = 0;
          } else {
            slideNum--;
            slideWrapper.style.top = -windowHeight * slideNum + 'px';
          }
        }
        setTimeout(() => { //1s後にFlag戻し
          scrollFlag = false;
        }, 1000);
      }
      currentPosition = scrollPosition; //比較値を上書き
    },
    scrollEvent: () => {
      //SPとPCでスクロール用イベント分岐
      const eventType = isMobile ? 'touchmove' : 'wheel';
      w.addEventListener(eventType, (event) => {
        fullScreenScroll.scrollProcessing(event);
      });
    },
    scrollHash: (entries) => {
      //ハッシュ更新
      [].slice.call(entries).forEach((val) => {
        if (val.isIntersecting) {
          history.pushState(null, null, '#' + val.target.id);
        }
      });
    }
  };
  const scrollOptions = {
    root: null,
    rootMargin: "-50% 0px"
  };
  const scrollObserver = new IntersectionObserver(fullScreenScroll.scrollHash, scrollOptions);
  querySliceCall(slide).forEach((slideElement) => {
    scrollObserver.observe(slideElement);
  });
  fullScreenScroll.scrollEvent();


  /** moveHash
   * @param {String} targetClass ナビクリックでハッシュ先に移動
   */
  const moveHash = (targetClass) => {
    querySliceCall(targetClass).forEach((btn, index) => {
      btn.addEventListener('click', (event) => {
        event.preventDefault();
        slideWrapper.style.top = '-' + windowHeight * index + 'px';
        slideNum = index;
        scrollPosition = windowHeight * index;
        currentPosition = scrollPosition;
      });
    });
  }
  moveHash(d.querySelectorAll('.js_dot'));
  moveHash(d.querySelectorAll('.js_link.js_hash'));

  //スライドの高さと表示位置を設定
  const setPosition = () => {
    querySliceCall(slide).forEach((ele, index) => {
      if(location.hash == '#' + ele.id) slideNum = index;
      ele.style.height = windowHeight + `px`;
      wrapperHeight = windowHeight * slide.length;
      slideWrapper.style.height = wrapperHeight + `px`;
      slideWrapper.style.top = -windowHeight * slideNum + 'px';
    });
  }
  setPosition();
  w.addEventListener('resize', () => {
    windowHeight = innerHeight;
    setPosition();
  });

  /** setScrollTransiton スクロール要素のトランジション
   * @param {String} property 対象プロパティ
   * @param {String} duration 時間
   * @param {String} timing イージング系
   */
  const setScrollTransiton = (property = 'top', duration = '1s', timing = 'ease-in-out') => {
    slideWrapper.style.transitionProperty = property;
    slideWrapper.style.transitionDuration = duration;
    slideWrapper.style.transitionTimingFunction = timing;
  };
  setScrollTransiton();
}