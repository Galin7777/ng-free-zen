import { dataFromAPI } from './data.js';
import { Header } from './widgets/index.js';
import { Download } from './widgets/index.js';
import { Warranty } from './widgets/index.js';
import { Care } from './widgets/index.js';
import { Cashback } from './widgets/index.js'
import { Clients } from './widgets/index.js';
import { Footer } from './widgets/index.js';
import { handleLogoClick, onThemeClick } from './handlers.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Header(dataFromAPI.primaryInfo));
$root?.insertAdjacentHTML('beforeend', Download(dataFromAPI.download));
$root?.insertAdjacentHTML('beforeend', Warranty(dataFromAPI.warranty));
$root?.insertAdjacentHTML('beforeend', Care(dataFromAPI.care));
$root?.insertAdjacentHTML('beforeend', Cashback(dataFromAPI.cashback));
$root?.insertAdjacentHTML('beforeend', Clients(dataFromAPI.clients));
$root?.insertAdjacentHTML('beforeend', Footer(dataFromAPI.secondaryInfo));

const $logoBtn = document.querySelector('#logo');
const $themeBtn = document.querySelector('#theme');
// const $burgerBtn = document.querySelector('#burger');

$logoBtn?.addEventListener('click', handleLogoClick);
$themeBtn?.addEventListener('click', (event) => onThemeClick(event, dataFromAPI.clients.brands));
// $burgerBtn?.addEventListener('click',)
