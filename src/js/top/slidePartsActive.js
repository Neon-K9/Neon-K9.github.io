import { d, w, userAgentType, sliceCall } from '../common/util';
import { setClasses } from '../module/setClasses';
export default function () {
  /** 
   * slideFade
   * フェードイン・アウト用のアクティブクラスの付け替え
   * @param {Object} element fade対象セレクタ(entries.target)
   * @param {String} classList fade要素のclassList指定
   * @param {String} target elementの子孫要素(class付替対象)
   */
  const slideFade = (element, classList, target = '.js_slideIn') => {
    sliceCall(d.querySelectorAll('#' + element.id + ' ' + target), (fadeElement) => {
      fadeElement.classList[classList]('is_active');
    });
  };

  /** 
   * currentNav
   * 現在のスライド(id)に合わせてナビをアクティブにする
   * @param {Object} element 表示されているスライド要素(entries.target)
   */
  const currentNav = (element) => {
    const currentActive = d.querySelector(".js_dot.is_active");
    if (currentActive !== null) currentActive.classList.remove("is_active");
    d.querySelector(`span[data-href='#${element.id}']`).parentNode.classList.add("is_active");
  }

  /** カレントナビとフェードイン実行 */
  const aboutButton = d.querySelector('#about .js_btn');
  const slideInEvent = (entries) => {
    sliceCall(entries, (entries) => {
      if (entries.isIntersecting) {
        currentNav(entries.target);
        slideFade(entries.target, 'add');
      } else {
        slideFade(entries.target, 'remove');
        if (aboutButton && aboutButton.classList.contains('is_position')) setClasses(aboutButton, 'remove', 'is_position');
      }
    });
  };
  const slideInOptions = {
    root: null,
    rootMargin: "-50% 0px"
  };
  const slideInObserver = new IntersectionObserver(slideInEvent, slideInOptions);
  sliceCall(document.querySelectorAll('.js_slide'), (slideElement) => {
    slideInObserver.observe(slideElement);
  });


  /** 満月要素のフェードインアウト */
  const moonFadeEvent = (entries) => {
    sliceCall(entries, (entries) => {
      entries.isIntersecting ? slideFade(entries.target, 'add', '.js_moonItem') : slideFade(entries.target, 'remove', '.js_moonItem');
    });
  };
  
  const moonInOptionsSP = {
    root: null,
    rootMargin: '0px 0px -55% 0px'
  };
  const moonOutOptionsPC = {
    root: null,
    rootMargin: '-80% 0px 0px 0px'
  };
  const moonOutOptionsSP = {
    root: null,
    rootMargin: '-45% 0px 0px 0px'
  };
  const moonInObserver = new IntersectionObserver(moonFadeEvent, userAgentType.isMobile ? moonInOptionsSP : slideInOptions);
  moonInObserver.observe(d.querySelector('#js_slideMoon'));
  const moonOutObserver = new IntersectionObserver(moonFadeEvent, userAgentType.isMobile ? moonOutOptionsSP : moonOutOptionsPC);
  moonOutObserver.observe(d.querySelector('#js_slideMoon'));

  w.addEventListener('resize', () => {
    sliceCall(d.querySelectorAll('#js_slideMoon .js_moonItem'), (moon) => {
      moon.classList.add('is_active');
    });
  });
}