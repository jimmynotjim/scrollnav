import getActiveSection from './util/getActiveSection';
import updateActiveNavItem from './util/updateActiveNavItem';

/* istanbul ignore next */
export default function setupScrollHandler(data, nav) {
  function scrollHandler() {
    const top = window.scrollY || window.pageYOffset || document.body.scrollTop;
    const boundryTop = top + 80;
    const boundryBottom = boundryTop + window.innerHeight / 3;
    const activeSection = getActiveSection(data, boundryTop, boundryBottom);

    updateActiveNavItem(activeSection, nav);

    return activeSection;
  }

  window.addEventListener('scroll', scrollHandler);
}
