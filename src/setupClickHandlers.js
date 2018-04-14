import getTargetYPosition from './util/getTargetYPosition';
import scrollTo from './scrollTo';

export default function setupClickHandlers(links, data, cb) {
  function clickHandler(event) {
    event.preventDefault();

    const activeOffset = window.innerHeight / 3 / 2 + 80;
    const targetYPosition = getTargetYPosition(event.target, data);
    const scrollYTarget = targetYPosition - activeOffset;

    scrollTo(scrollYTarget, 'easeOutQuad').then(cb());
  }

  links.forEach(link => {
    link.addEventListener('click', clickHandler);
  });
}
