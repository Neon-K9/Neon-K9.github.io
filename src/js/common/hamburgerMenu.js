import { d, useId, sliceCall, useRegex } from './util';
import { setClasses } from '../module/setClasses';
export default function () {
  /** process イベント処理
   * @property {Object} toggleOpen リンク一覧の開閉
   * @property {Object} curtainOpen 遷移時の黒幕表示
   */
  const process = {
    toggleOpen: () => {
      d.body.classList.toggle('is_lock');
      useId.hamburgerButton.classList.toggle('is_close');
      d.querySelector('.js_menuOpen').classList.toggle('is_open');
      if (useId.header.classList.contains('is_intersection')) setClasses(useId.header, 'toggle', 'is_open');
    },
    curtainOpen: (link) => {
      if (useRegex.pathTop.test(location.href) && useRegex.containsTop.test(link.getAttribute('href'))) {
        location.hash = '';
        location.reload();
        return;
      } else if (useRegex.pathAbout.test(location.href) && useRegex.containsAbout.test(link.getAttribute('href'))) {
        location.reload();
        return;
      }
      if (useId.header.classList.contains('is_open')) setClasses(useId.header, 'remove', 'is_open');
      d.getElementById('js_curtain').classList.add('is_active');
      setTimeout(() => {
        process.toggleOpen();
      },1000);
      setTimeout(() => {
        d.getElementById('js_curtain').classList.remove('is_active');
      },1800);
    }
  }

  // クリック処理
  sliceCall(d.querySelectorAll('.js_link'), (link) => {
    link.addEventListener('click', () => {
      link === useId.hamburgerButton ? process.toggleOpen() : process.curtainOpen(link) ;
    });
  });
};