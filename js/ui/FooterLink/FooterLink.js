/* eslint-disable indent */

/**
 * @typedef {import ('../../widjets/Footer/types').LinkData} LinkData
 */

/**
 * @function FooterLink
 * @param {LinkData} linkData
 * @returns {string} HTML
 */

export const FooterLink = (linkData) => `
  <a href="${linkData.url}">
    ${linkData.content.type === 'text'
      ? linkData.content.data
      : `<img src="${linkData.content.data}" alt= "Linkedin" />`}
  </a>
`;
