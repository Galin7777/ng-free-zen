/**
 * @typedef {import ('./types').ImageData} ImageDataData
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
/>`;
