import { IconMoon } from './ui/Icons/IconMoon/index.js';
import { IconSun } from './ui/Icons/IconSun/index.js';

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
 * @typedef {import('./widjets/Clients/types').BrandFromAPI} BrandFromAPI
 */

/**
 * @function onThemeClick
 * @description In anonimous handler
 * @param {Event} event
 * @param {BrandFromAPI[]} brandsFromAPI
 *
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
