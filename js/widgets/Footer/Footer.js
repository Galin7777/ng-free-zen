import { Column } from '../../ui/Column/index.js';
import { IconLogo2 } from '../../ui/icons/index.js';
import { IconDev } from '../../ui/icons/index.js';

/**
 * @typedef {import ('./types').FooterData} FooterData
 */

/**
 * @function Footer
 * @param {FooterData} data
 * @returns {string} HTML
 */

export const Footer = (data) => {
  const { categories, texts, developer } = data;

  return `
    <footer class="footer" id="footer">
      <div class="footer__wrapper">
        <div class="footer__columns">
          ${categories.map((category) => Column(category)).join('')}
        </div>
        <div class="footer__info">
          <a class="footer__logo" href="https://example.com">
            ${IconLogo2()}
          </a>
          ${texts.map((text) => `
            <p class="footer__copy">
              ${text}
            </p>
          `).join('')}
          <a class="footer__dev" href="${developer.url}">
            ${IconDev()}
          </a>
        </div>
      </div>
    </footer>
  `;
};
