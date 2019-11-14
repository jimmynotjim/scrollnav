export default function updateActiveNavItem(activeSection, nav) {
  const previousActive = nav.querySelector('[data-sn-active]');

  if (!activeSection) {
    if (previousActive) {
      previousActive.classList.remove('scroll-nav__item--active');
      previousActive.removeAttribute('data-sn-active');
    }

    return;
  }

  const newActive = nav.querySelector(
    '[data-sn-section="' + activeSection.id + '"]'
  );

  if (newActive && newActive !== previousActive) {
    if (previousActive) {
      previousActive.classList.remove('scroll-nav__item--active');
      previousActive.removeAttribute('data-sn-active');
    }
    newActive.classList.add('scroll-nav__item--active');
    newActive.setAttribute('data-sn-active', true);
  }
}
