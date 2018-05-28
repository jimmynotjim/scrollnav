import getTargetYPosition from './util/getTargetYPosition';
import scrollTo from './scrollTo';

export default function setupClickHandlers(scrollNav) {
  const settings = scrollNav.settings;
  function clickHandler(event) {
    event.preventDefault();

    const activeArea = window.innerHeight * 0.39;
    const targetYPosition = getTargetYPosition(event.target, scrollNav.data);
    const scrollYTarget = targetYPosition - activeArea;

    /* istanbul ignore next */
    return scrollTo(scrollYTarget, settings.easingStyle).then(() => {
      if (settings.updateHistory) {
        history.replaceState({}, '', event.target.getAttribute('href'));
      }

      if (settings.onScroll) {
        settings.onScroll();
      }
    });
  }

  const links = scrollNav.nav.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', clickHandler);
  });

  return clickHandler;
}
