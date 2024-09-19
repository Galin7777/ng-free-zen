import { IconApple } from '../icons/IconApple/IconApple.js';
import { IconGoogle } from '../icons/IconGoogle/IconGoogle.js';

/**
 * @typedef {import ('./types.js').LinkData} LinkData
 */

/**
 * @function Link
 * @param {LinkData} data
 * @param {string} className
 * @returns {string} HTML
 */

export const Link = (data, className) => `
  <a class="${className}" href="${data.url}">
    ${data.name === 'apple' ? IconApple() : ''}
    ${data.name === 'google' ? IconGoogle() : ''}
  </a>
`;
