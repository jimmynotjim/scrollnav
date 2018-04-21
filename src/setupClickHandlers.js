import getTargetYPosition from './util/getTargetYPosition';
import scrollTo from './scrollTo';

export default function setupClickHandlers(links, data, cb) {
  function clickHandler(event) {
    event.preventDefault();

    const activeArea = window.innerHeight / 3;
    const targetYPosition = getTargetYPosition(event.target, data);
    const scrollYTarget = targetYPosition - activeArea;

    scrollTo(scrollYTarget, 'easeOutQuad').then(cb());
  }

  links.forEach(link => {
    link.addEventListener('click', clickHandler);
  });

  return clickHandler;
}
