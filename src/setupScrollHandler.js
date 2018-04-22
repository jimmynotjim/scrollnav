import getActiveSection from './util/getActiveSection';
import updateActiveNavItem from './util/updateActiveNavItem';

export default function setupScrollHandler(scrollNav) {
  function scrollHandler() {
    const top = window.scrollY || window.pageYOffset || document.body.scrollTop;
    const boundryTop = top;
    const boundryBottom = top + window.innerHeight * 0.4;
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
