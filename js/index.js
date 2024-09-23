import { dataFromAPI } from './data.js';
import { App } from './App.js';
import { handleLogoClick } from './handlers.js';
import { onThemeClick,  } from './handlers.js';
import { handleBurgerClick } from './handlers.js';
import { handleNavClick } from './handlers.js';

const $root = document.querySelector('#root');

$root?.insertAdjacentHTML('beforeend', App(dataFromAPI));

const $logoBtn = document.querySelector('#logo');
const $themeBtn = document.querySelector('#theme');
const $burgerBtn = document.querySelector('#burger');
const $nav = document.querySelector('#nav');

$logoBtn?.addEventListener('click', handleLogoClick);
$themeBtn?.addEventListener('click', (event) => onThemeClick(event, dataFromAPI.clients.brands));
$burgerBtn?.addEventListener('click', handleBurgerClick);
$nav?.addEventListener('click', handleNavClick);
