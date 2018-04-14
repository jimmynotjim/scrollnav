import calculateScrollDuration from './util/calculateScrollDuration';
import calculateEasedTimes from './util/calculateEasedTimes';
import { easing } from './util/easing';

export default function scrollTo(targetPosition, easingStyle) {
  return new Promise(async (resolve, reject) => {
    if (typeof targetPosition !== 'number') {
      return reject(new Error('First argument must be a number'));
    }

    easingStyle = easingStyle || 'linear';
    if (typeof easingStyle !== 'string') {
      return reject(new Error('Second argument must be a string'));
    }

    const startingPosition = window.pageYOffset;
    const distance = targetPosition - startingPosition;
    const duration = await calculateScrollDuration(distance);
    const framerate = 50;
    const increment = 1000 / framerate;
    let ellapsedTime = 0;
    let easedTime;
    let next;

    function animateScroll() {
      ellapsedTime += increment;
      easedTime = easing[easingStyle](ellapsedTime / duration);
      next = easedTime * distance + startingPosition;
      window.scroll(0, next);

      if (ellapsedTime < duration) {
        setTimeout(animateScroll, increment);
      } else {
        resolve();
      }
    }

    animateScroll();
  });
}
