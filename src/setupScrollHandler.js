import getActiveSection from './util/getActiveSection';
import updateActiveNavItem from './util/updateActiveNavItem';

export default function setupScrollHandler(scrollnav) {
  function scrollHandler() {
    const top = window.scrollY || window.pageYOffset || document.body.scrollTop;
    const boundryTop = top;
    const boundryBottom = top + window.innerHeight * 0.4;
    const activeSection = getActiveSection(
      scrollnav.data,
      boundryTop,
      boundryBottom
    );

    updateActiveNavItem(activeSection, scrollnav.nav);

    return activeSection;
  }

  window.addEventListener('scroll', scrollHandler);

  return scrollHandler;
}
