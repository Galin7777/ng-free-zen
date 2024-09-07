import { FooterLink } from '../FooterLink/index.js';

/**
 * @typedef {import ('./types').CategoryData} CategoryData
 */

/**
 * @function Column
 * @param {CategoryData} data
 * @returns {string} HTML
 */

export const Column = (data) => {
  const { name, links } = data;

  return `
    <div class="column">
      <h3 class="column__title">${name}</h3>
      <ul class="column__list">
          ${links.map((link) => `
            <li class="column__item">
              ${FooterLink(link)}
            </li>
          `).join('')}
      </ul>
    </div>
  `;
};