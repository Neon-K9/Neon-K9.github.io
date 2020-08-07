import {d, querySliceCall} from '../common/util';
export default function () {
  const slide = d.querySelectorAll('.js_slide'); //スライド要素

  /** slideFade フェードイン・アウトでis_activeを付替
   * @param {String} element fade対象セレクタ
   * @param {String} type fade要素のis_active付替
   */
  const slideFade = (element, type = 'in') => {
    querySliceCall(d.querySelectorAll('#' + element.id + ' .js_slideIn')).forEach((fadeElement) => {
      fadeElement.classList[type === 'in' ? 'add' : 'remove']('is_active');
    })
  };

  /** currentNav カレントナビ関連
   * @param {String} element 現在見えている範囲のidに合わせてナビをアクティブにする
   */
  const currentNav = (element) => {
    const currentActive = d.querySelector(".js_dot.is_active");
    if (currentActive !== null) currentActive.classList.remove("is_active");
    d.querySelector(`a[href='#${element.id}']`).parentNode.classList.add("is_active");
  }

  /** カレントナビとフェードイン実行 */
  const slideInEvent = (entries) => {
    [].slice.call(entries).forEach((entries) => {
      if (entries.isIntersecting) {
        currentNav(entries.target);
        slideFade(entries.target);
      } else {
        slideFade(entries.target, null);
      }
    });
  };
  const slideInOptions = {
    root: null,
    rootMargin: "-50% 0px"
  };
  const slideInObserver = new IntersectionObserver(slideInEvent, slideInOptions);
  querySliceCall(slide).forEach((slideElement) => {
    slideInObserver.observe(slideElement);
  });
}