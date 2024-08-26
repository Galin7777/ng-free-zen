import { Select } from '../../ui/Select/index.js';

/**
 * @typedef {import('./types').LangData } LangData
 */

/**
 * @function LangData
 * @param {LangData[]} data
 * @returns {string} HTML
 */

export const LangData = (data) => `
  ${Select(data, 'lang')}
`;
