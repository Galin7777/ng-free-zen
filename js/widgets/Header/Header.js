import { Logo } from '../../features/Logo/index.js';
import { Navigation } from '../../features/Navigation/index.js';
import { LangData } from '../../features/Lang/index.js';
import { Burger } from '../../features/Burger/index.js';
import { Theme } from '../../features/Theme/index.js';


/**
 * @typedef {import('./types.js').HeaderData} HeaderData
 */

/**
 * @function Header
 * @param {HeaderData} data
 * @returns {string} HTML
 */

export const Header = (data) => `
  <header class="header">
    <div class="header__wrapper">
      ${Logo('header__logo')}
      <nav class="header__nav">
        ${Navigation(data.navigation)}
      </nav>
      <div class="header__actions">
        <label class="header__lang">
          ${LangData(data.langs)}
        </label>
        ${Theme('header__theme')}
        ${Burger('header__burger')}
      </div>
    </div>
  </header>
`;
