import { data } from './data.js';
import { Header } from './widjets/Header/Header.js';
import { Download } from './widjets/Download/Download.js';
import { Warranty } from './widjets/Warranty/Warranty.js';
import { Care } from './widjets/Care/Care.js';
import { Cashback } from './widjets/Cashback/Cashback.js';
import { Clients } from './widjets/Clients/Clients.js';
import { Footer } from './widjets/Footer/index.js';
import { HendleLogoBtn } from './hendlers.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', Header(data.primaryInfo));
$root?.insertAdjacentHTML('beforeend', Download(data.download));
$root?.insertAdjacentHTML('beforeend', Warranty(data.warranty));
$root?.insertAdjacentHTML('beforeend', Care(data.care));
$root?.insertAdjacentHTML('beforeend', Cashback(data.cashback));
$root?.insertAdjacentHTML('beforeend', Clients(data.clients));
$root?.insertAdjacentHTML('beforeend', Footer(data.secondaryInfo));

const $LogoBtn = document.querySelector('#logo');

$LogoBtn?.addEventListener('click', HendleLogoBtn);
