import { data } from './data.js';
import { Header } from './widjets/Header/Header.js';
import { Download } from './widjets/Download/Download.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Header(data.primaryInfo));
$root?.insertAdjacentHTML('beforeend', Download(data.download));

const $logo = document.querySelector('#logo');

$logo?.addEventListener('click', () => {
  console.log('clickedLogo');
});
