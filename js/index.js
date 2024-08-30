import { data } from './data.js';
import { Header } from './widjets/Header/Header.js';
import { Download } from './widjets/Download/Download.js';
import { Warranty } from './widjets/Warranty/Warranty.js';
import { Care } from './widjets/Care/Care.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Header(data.primaryInfo));
$root?.insertAdjacentHTML('beforeend', Download(data.download));
$root?.insertAdjacentHTML('beforeend', Warranty(data.warranty));
$root?.insertAdjacentHTML('beforeend', Care(data.care));

const $logo = document.querySelector('#logo');

$logo?.addEventListener('click', () => {
  console.log('clickedLogo');
});
