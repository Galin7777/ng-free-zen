/**
 * @typedef {import ('../../types').ColumnLinkData} ColumnLinkData
 */

/**
 * @function FooterLink
 * @param {ColumnLinkData} columnLinkData
 * @returns {string} HTML
 */

export const FooterLink = (columnLinkData) => `
  <a href="${columnLinkData.url}">
    ${columnLinkData.content.type === 'text'
      ? columnLinkData.content.data
      : `<img src="${columnLinkData.content.data}" alt= "Linkedin" />`}
  </a>
`;
