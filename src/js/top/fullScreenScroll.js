import {d, w, userAgentType, sliceCall} from '../common/util';
export default function () {
  let slideNum = 0; //スライド番号
  let wrapperHeight = 0;
  let windowHeight = innerHeight;
  let touchStart, touchMove, touchEnd;
  const slideWrapper = document.getElementById('js_slideWrap');
  const slide = document.querySelectorAll('.js_slide');
  let time; //slideInit.scrollTransitonの第2引数と同じ

  /**
   * IE11,safariは最後までtransition-durationが残っているとclass付替動作しないので付け直す
   * IntersectionObserver_polyfillの対象ブラウザなのも要因？
   */
  const transitionReset = () => {
    setTimeout(() => {
      slideWrapper.style.transitionDuration = 0;
      slideWrapper.style.transitionDuration = time + 's';
    }, time * 1000);
  };


  /** slideInit
   * @property {Object} position スライドの高さと表示位置を設定
   * @property {Object} scrollTransiton スライド要素のcssTransition
   */
  const slideInit = {
    position: () => {
      sliceCall(slide, (ele, index) => {
        if(location.hash == '#' + ele.id) slideNum = index;
        ele.style.height = windowHeight + `px`;
        wrapperHeight = windowHeight * slide.length;
        slideWrapper.style.height = wrapperHeight + `px`;
        slideWrapper.style.top = -windowHeight * slideNum + 'px';
      });
    },
    scrollTransiton: (property = 'top', duration = 1, timing = 'ease-in-out') => {
      slideWrapper.style.transitionProperty = property;
      slideWrapper.style.transitionDuration = duration + 's';
      slideWrapper.style.transitionTimingFunction = timing;
      time = duration;
    }
  }
  w.addEventListener('resize', () => {
    windowHeight = innerHeight;
    slideInit.position();
  });
  slideInit.position();
  setTimeout(slideInit.scrollTransiton, 500);


  /** fullScreenScroll
   * @property {Boolean} scrollFlag スライドのスクロール可否
   * @property {Object} scrollProcessing スクロール方向判定の処理
   * @property {Object} scrollEventListener scrollProcessing()をイベントリスナーに登録
   * @property {Object} scrollChangeHash 表示されたスライドのハッシュにURL更新
   * @property {Object} moveToHash ナビクリックでハッシュ先に移動
   */
  const fullScreenScroll = {
    scrollFlag: true,
    scrollProcessing: (event) => {
      // SPとPCで比較対象を分岐
      const scrollPosition = userAgentType.isMobile ? touchEnd : event.deltaY;
      const scrollDown = scrollPosition > 0;
      if (fullScreenScroll.scrollFlag) {
        // 1画面スクロールを終えたらスクロール可に戻す
        fullScreenScroll.scrollFlag = false;
        clearTimeout(timerId);
        const timerId = setTimeout(() => {
          fullScreenScroll.scrollFlag = true;
        }, time * 1000);

        // 上下スクロールの処理
        if (userAgentType.isIE11 || userAgentType.isSafari) transitionReset();
        if (scrollDown) {
          // slideより増やさない
          if (slideNum >= slide.length - 1) {
            slideNum = slide.length - 1;
          } else {
            slideNum++;
            slideWrapper.style.top = -windowHeight * slideNum + 'px';
          }
        } else {
          // slideより減らさない
          if (slideNum <= 0) {
            slideNum = 0;
          } else {
            slideNum--;
            slideWrapper.style.top = -windowHeight * slideNum + 'px';
          }
        }
      }
    },
    scrollEventListener: () => {
      if (userAgentType.isMobile) {
        slideWrapper.addEventListener('touchstart', (event) => {
          touchStart = event.touches[0].pageY;
        });
        slideWrapper.addEventListener('touchmove', (event) => {
          touchMove = event.touches[0].pageY;
        });
        slideWrapper.addEventListener('touchend', (event) => {
          if (touchMove == undefined || touchStart == (touchMove + touchEnd)) return;
          touchEnd = touchStart - touchMove;
          fullScreenScroll.scrollProcessing(event);
        });
      } else {
        slideWrapper.addEventListener('wheel', (event) => {
          fullScreenScroll.scrollProcessing(event);
        });
      }
    },
    scrollChangeHash: (entries) => {
      sliceCall(entries, (entries) => {
        if (entries.isIntersecting) history.pushState(null, null, '#' + entries.target.id);
      });
    },
    moveToHash: (targetClass) => {
      sliceCall(targetClass, (btn, index) => {
        btn.addEventListener('click', (event) => {
          event.preventDefault();
          if (userAgentType.isIE11 || userAgentType.isSafari) transitionReset();
          slideWrapper.style.top = '-' + windowHeight * index + 'px';
          slideNum = index;
        });
      });
    }
  };
  const scrollObserver = new IntersectionObserver(fullScreenScroll.scrollChangeHash, {
    root: null,
    rootMargin: "-50% 0px"
  });
  sliceCall(slide, (slideElement) => {
    scrollObserver.observe(slideElement);
  });
  fullScreenScroll.scrollEventListener();
  fullScreenScroll.moveToHash(d.querySelectorAll('.js_dot'));
  fullScreenScroll.moveToHash(d.querySelectorAll('.js_hash'));
}