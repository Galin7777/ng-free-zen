/**
 * @typedef {import('./types.js').ClientsData} ClientsData
/**

/**
 * @function Clients
 * @param {ClientsData} data
 * @returns {string} HTML
 */

export const Clients = (data) => {
  const { brands } = data;
  return `
    <section class="clients" id="clients">
      <div class="clients__wrapper">
        <ul class="clients__brands" id="brands">
          ${brands.map((brand) => `
            <li class="clients__brand">
              <img src="${brand.logo.lightSource}" alt="${brand.name}" data-id = "brand">
            </li>
          `).join('')}
        </ul>
      </div>
    </section>
  `;
};
