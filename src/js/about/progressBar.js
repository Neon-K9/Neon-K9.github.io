import {d, fadeClass} from '../common/util';
export default function () {
  //プログレスバーのアニメーション用
  const progressBar = d.querySelectorAll('.js_progressBar');
  fadeClass(progressBar, progressBar, 'add', '');
};