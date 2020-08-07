export default function () {
  /** マウス移動で背景画像を逆追従
   * @param {string} id 対象のセレクタ
   * @param {number} movement 移動量の数値
   */
  const setMouseMove = (id, movement = .1) => {
    document.body.addEventListener('mousemove', (event) => {
      const bgX = (event.pageX * .1) * movement;
      const bgY = (event.pageY * .1) * movement;
      if(document.getElementById(id)) document.getElementById(id).style.transform = 'translate' + '(' + '-' + bgX + 'px' + ',' + '-' + bgY + 'px' + ')';
    });
  }

  setMouseMove('js_background', .3);
  setMouseMove('js_background_star');
  setMouseMove('js_background_text', .2);
  setMouseMove('js_moon', .5);
  setMouseMove('js_cloud_upperLeft', .4);
  setMouseMove('js_cloud_upperRight', .3);
  setMouseMove('js_cloud_lowerLeft', .7);
  setMouseMove('js_cloud_lowerRight', .6);
  setMouseMove('js_cloud_center', .8);
}