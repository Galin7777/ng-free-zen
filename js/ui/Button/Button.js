/**
 * @function Button
 * @param {string} className
 * @param {string} text
 * @returns {string} HTML
 */

export const Button = (className, text) => `
  <button class="${className}"
    type="button"
    id="order-open"
  >
    ${text}
  </button>
`;
