/**
 * @typedef {import ('./types').ImageData} ImageData
 */

/**
 * @function Image
 * @param {Object} image
 * @returns {string} HTML
 */

export const Image = (image) => `
  <img
    src="${image.source}"
    alt="${image.description}"
  />
`;
