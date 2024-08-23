/**
 * @typedef {import ('./types').ImageData} ImageDataData
 */

/**
 * @function Image
 * @param {string} source
 * @param {string} description
 * @returns {string} HTML
 */
export const Image = (image) => `<img src="${image.source}" alt="${image.description}" />`;
