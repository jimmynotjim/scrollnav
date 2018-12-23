import getTargetYPosition from './util/getTargetYPosition';
import scrollTo from './scrollTo';

export default function setupClickHandlers(scrollnav) {
  const settings = scrollnav.settings;
  function clickHandler(event) {
    event.preventDefault();

    const activeArea = window.innerHeight * 0.39;
    const targetYPosition = getTargetYPosition(event.target, scrollnav.data);
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

  const links = scrollnav.nav.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', clickHandler);
  });

  return clickHandler;
}
