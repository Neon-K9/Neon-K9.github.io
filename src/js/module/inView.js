/**
 * inView (可視と不可視の判定)
 * @param {Object} observeTarget 交差対象セレクタ (IntersectionObserverの発火要素)
 * @param {Object} isIntersectingFunc 画面内のコールバック (第一引数：entriesをforEachで回した各要素、またはfixedTargetを代入)
 * @param {Object} unIntersectingFunc 画面外のコールバック (第一引数：entriesをforEachで回した各要素、またはfixedTargetを代入)
 * @param {Object} fixedTarget 操作対象がfixed要素の時にセレクタ指定 (未使用なら null)
 * @param {Object} root IntersectionObserver設定の'root'
 * @param {String} rootMargin IntersectionObserver設定の'rootMargin'
*/
export const inView = (observeTarget, isIntersectingFunc = null, unIntersectingFunc = null, fixedTarget = null, root = null, rootMargin = '0px') => {
  /**
   * new IntersectionObserver 第一引数用
   */
  const callback = (entries) => {
    [].slice.call(entries).forEach((entry) => {
      if (entry.isIntersecting) {
        if (isIntersectingFunc === null) return;
        fixedTarget !== null ? isIntersectingFunc(fixedTarget) : isIntersectingFunc(entry.target);
      } else {
        if (unIntersectingFunc === null) return;
        fixedTarget !== null ? unIntersectingFunc(fixedTarget) : unIntersectingFunc(entry.target);
      }
    })
  };

  const init = new IntersectionObserver(callback, {
    root: root,
    rootMargin: rootMargin
  });

  if ({}.toString.call(observeTarget) === '[object NodeList]' || {}.toString.call(observeTarget) === '[object Array]') {
    [].slice.call(observeTarget).forEach((observeTarget) => {
      init.observe(observeTarget);
    })
  } else {
    init.observe(observeTarget);
  }
}