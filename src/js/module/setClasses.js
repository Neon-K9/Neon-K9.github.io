/** setClasses (classの付け替え)
 * @param {Object} element 対象セレクタ
 * @param {String} classList classList: 'add' or 'remove' or 'toggle'
 * @param {String} className class名
 */
export const setClasses = (element, classList = 'add', className = 'is_intersection') => {
  if (classList == null) return;
  if ({}.toString.call(element) === '[object NodeList]' || {}.toString.call(element) === '[object Array]') {
    [].slice.call(element).forEach((element) => {
      element.classList[classList](className);
    });
  } else {
    element.classList[classList](className);
  }
}