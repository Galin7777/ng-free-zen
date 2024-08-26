import { IconTheme } from '../../ui/Icons/IconTheme/index.js';

/**
 * @function Theme
 * @param {string} className
 * @return {string} HTML
 */

export const Theme = (className) => `
  <button class="header__theme"
    type="button"
    id="theme"
  >
    ${IconTheme()}
  </button>
`;
