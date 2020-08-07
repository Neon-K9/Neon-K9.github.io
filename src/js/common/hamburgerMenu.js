import {d, header, hamburgerButton, querySliceCall, setClass, isMobile} from './util';
export default function () {
  // メニュー開閉
  const toggleOpen = () => {
    hamburgerButton.classList.toggle('is_close');
    d.querySelector('.js_menuOpen').classList.toggle('is_open');
    d.body.classList.toggle('is_lock');
    // メニュー表示かつ対象classを持っていたら消す
    if (header.classList.contains('is_intersection')) {
      setClass(header, 'toggle', 'is_open');
    }
  }
  // リンククリックで黒幕表示
  const curtainActive = (link) => {
    if (location.pathname === '/' && link.getAttribute('href') !== 'about.html') {
      toggleOpen();
      return;
    }
    d.getElementById('js_curtain').classList.add('is_active');
    setTimeout(() => {
      toggleOpen();
    },1000);
    setTimeout(() => {
      d.getElementById('js_curtain').classList.remove('is_active');
    },1500);
  }

  // クリック処理
  querySliceCall(d.querySelectorAll('.js_link')).forEach((link) => {
    link.addEventListener('click', () => {
      d.getElementById(link.id) === hamburgerButton ? toggleOpen() : curtainActive(link) ;
    });
  });
};