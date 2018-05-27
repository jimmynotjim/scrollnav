import getTargetYPosition from './util/getTargetYPosition';
import scrollTo from './scrollTo';

export default function setupClickHandlers(scrollNav) {
  function clickHandler(event) {
    event.preventDefault();

    const activeArea = window.innerHeight * 0.39;
    const targetYPosition = getTargetYPosition(event.target, scrollNav.data);
    const scrollYTarget = targetYPosition - activeArea;

    /* istanbul ignore next */
    return scrollTo(scrollYTarget, scrollNav.scrollEasing).then(() => {
      history.replaceState({}, '', href);

      if (scrollNav.settings.onScroll) {
        scrollNav.settings.onScroll();
      }
    });
  }

  const links = scrollNav.nav.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', clickHandler);
  });

  return clickHandler;
}
