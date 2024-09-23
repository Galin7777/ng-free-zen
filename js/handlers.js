import { IconMoon } from './ui/icons/index.js';
import { IconSun } from './ui/icons/index.js';
import { toggleBurgerAndNav } from './utils/index.js';

/**
 * @function handleLogoClick
 * @description Smooth scrolling up
 */

export const handleLogoClick = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

/**
 * @typedef {import('./types').BrandFromAPI} BrandFromAPI
 */

/**
 * @function onThemeClick
 * @description In anonimous handler
 * @param {Event} event
 * @param {BrandFromAPI[]} brandsFromAPI
 * @returns {void}
 */

export const onThemeClick = (event, brandsFromAPI) => {
  /**@type {NodeListOf<HTMLImageElement>} */
  const $brandNodes = document.querySelectorAll('[data-id="brand"]');
  const $themeBtn = /** @type { HTMLElement | null } */ (event.currentTarget);
  if (!$themeBtn) return;
  const $root = document.querySelector('#root');
  if (!$root) return;

  if ($root.classList.contains('dark')) {
    $root.classList.remove('dark');
    $root.classList.add('light');
    $themeBtn.dataset.theme = 'light';
    $themeBtn.innerHTML = IconMoon();

    $brandNodes.forEach((brand, index) => {
      brand.src = brandsFromAPI[index].logo.lightSource;
    });

  } else {
    $root.classList.remove('light');
    $root.classList.add('dark');
    $themeBtn.dataset.theme = 'dark';
    $themeBtn.innerHTML = IconSun();

    $brandNodes.forEach((brand, index) => {
      brand.src = brandsFromAPI[index].logo.darkSource;
    });
  };
};

/**
 * @function handleBurgerClick
 * @description Handles burger button clicks and hides
 */

export const handleBurgerClick = () => {
  toggleBurgerAndNav();
};

/**
 * @function handleNavClick
 * @description Controls the click on the burger shows the menu and scrolls through the sections
 */

export const handleNavClick = () => {
  document.querySelectorAll('.nav__item').forEach((item) => {
    item.replaceWith(item.cloneNode(true));
  });

  document.querySelectorAll('.nav__item').forEach((item) => {
  item.addEventListener('click', (event) => {
  event.preventDefault();

  const link = item.querySelector('a');
    if (!link) return;

  const href = link.getAttribute('href');
    if (!href) return;

  const targetElement = document.querySelector(href);
    if (!targetElement) return;

  const headerHeight = document.querySelector('header')?.offsetHeight || 0;
  const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth',
    });
      toggleBurgerAndNav();
    });
  });
};

// /**
//  * @function handleLangClick
//  * @param {Event} event
//  * @returns {void}
//  */
