import { dataFromAPI } from './data.js';
import { Header } from './widjets/Header/Header.js';
import { Download } from './widjets/Download/Download.js';
import { Warranty } from './widjets/Warranty/Warranty.js';
import { Care } from './widjets/Care/Care.js';
import { Cashback } from './widjets/Cashback/Cashback.js';
import { Clients } from './widjets/Clients/Clients.js';
import { Footer } from './widjets/Footer/index.js';
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

$logoBtn?.addEventListener('click', handleLogoClick);
$themeBtn?.addEventListener('click', (event) => onThemeClick(event, dataFromAPI.clients.brands));
