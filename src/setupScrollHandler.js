import getActiveSection from './util/getActiveSection';
import updateActiveNavItem from './util/updateActiveNavItem';

export default function setupScrollHandler(scrollNav) {
  function scrollHandler() {
    const top = window.scrollY || window.pageYOffset || document.body.scrollTop;
    const boundryTop = top + 10;
    const boundryBottom = window.innerHeight / 3;
    const activeSection = getActiveSection(
      scrollNav.data,
      boundryTop,
      boundryBottom
    );

    updateActiveNavItem(activeSection, scrollNav.nav);

    return activeSection;
  }

  window.addEventListener('scroll', scrollHandler);

  return scrollHandler;
}
