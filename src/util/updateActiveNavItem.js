export default function updateActiveNavItem(activeSection, nav) {
  const previousActive = nav.querySelector('[data-sn-active]');

  if (!activeSection) {
    if (previousActive) {
      previousActive.classList.remove('scroll-nav__item--active');
      previousActive.removeAttribute('data-sn-active');
    }

    return;
  }

  const currentActive = nav.querySelector(
    '[data-sn-section=' + activeSection.id + ']'
  );

  if (currentActive && currentActive !== previousActive) {
    if (previousActive) {
      previousActive.classList.remove('scroll-nav__item--active');
      previousActive.removeAttribute('data-sn-active');
    }
    currentActive.classList.add('scroll-nav__item--active');
    currentActive.setAttribute('data-sn-active', true);
  }
}
