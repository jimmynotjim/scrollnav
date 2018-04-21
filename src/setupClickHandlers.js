import getTargetYPosition from './util/getTargetYPosition';
import scrollTo from './scrollTo';

export default function setupClickHandlers(scrollNav) {
  function clickHandler(event) {
    event.preventDefault();

    const activeArea = window.innerHeight / 3;
    const targetYPosition = getTargetYPosition(event.target, scrollNav.data);
    const scrollYTarget = targetYPosition - activeArea;

    scrollTo(scrollYTarget, 'easeOutQuad').then(scrollNav.settings.onScroll());
  }

  const links = scrollNav.nav.querySelectorAll('a');
  links.forEach(link => {
    link.addEventListener('click', clickHandler);
  });

  return clickHandler;
}
