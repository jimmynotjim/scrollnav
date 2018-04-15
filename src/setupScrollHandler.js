import updateActiveNavItem from './util/updateActiveNavItem';

/* istanbul ignore next */
export default function setupScrollHandler(data, nav) {
  function scrollHandler() {
    let activeSection;
    const top = window.scrollY || window.pageYOffset || document.body.scrollTop;
    const boundryTop = top + 80;
    const boundryBottom = boundryTop + window.innerHeight / 3;

    data.forEach(section => {
      if (section.offsetTop > boundryBottom) {
        if (!activeSection && section.offsetTop < boundryTop) {
          activeSection = section;
        }
      } else {
        activeSection = section;
      }
    });

    updateActiveNavItem(activeSection, nav);
  }

  window.addEventListener('scroll', scrollHandler);
}
