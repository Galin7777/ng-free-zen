/**
 * @function toggleBurgerAndNav
 * @description Toggle for burger and navigation
 */

export const toggleBurgerAndNav = () => {
  const $burgerBtn = document.querySelector('#burger');
  if (!$burgerBtn) return;
  $burgerBtn.classList.toggle('active');
  const $nav = document.querySelector('#nav');
  if (!$nav) return;
  $nav.classList.toggle('active');
};
