import { IconMoon } from '../../ui/icons/index.js';

/**
 * @function Theme
 * @param {string} className
 * @return {string} HTML
 */

export const Theme = (className) => `
  <button class="header__theme"
    type="button"
    id="theme"
    data-theme="dark"
  >
    ${IconMoon()}
  </button>
`;
