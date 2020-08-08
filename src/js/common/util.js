// 記述省略
export const w = window;
export const d = document

// コンテンツ内のidセレクター
export const useId = {
  top: document.getElementById('js_top'),
  about: document.getElementById('js_about'),
  header: document.getElementById('js_header'),
  hamburgerButton: document.getElementById('js_hamburgerMenu')
}

// 正規表現
export const useRegex = {
  pathTop: RegExp('^https?:\/{2,}.*?(\/|\/#|\/#(.)*)$'),
  pathAbout: RegExp('^https?:\/{2,}.*?(\/about.html)$'),
  containsTop: RegExp('(\/|\/#|\/#top)$'),
  containsAbout: RegExp('(\/about.html)$')
}

// ユーザーエージェント
export const userAgentType = {
  isMobile: navigator.userAgent.match(/iPhone|iPad|Android.+Mobile/),
  isIE11: navigator.userAgent.toLowerCase().indexOf('trident') !== -1,
  isSafari: navigator.userAgent.toLowerCase().indexOf('safari') !== -1 && navigator.userAgent.toLowerCase().indexOf('chrome') === -1 && navigator.userAgent.toLowerCase().indexOf('edge') === -1,
}

// 要素を配列風 & コールバック
export const sliceCall = (element, callback = null) => {
  return callback ? [].slice.call(element).forEach(callback) : [].slice.call(element);
}