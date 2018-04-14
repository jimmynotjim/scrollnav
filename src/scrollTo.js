import calculateScrollDuration from './util/calculateScrollDuration';
import calculateEasedTimes from './util/calculateEasedTimes';

function scrollTo(targetPosition, easingStyle, cb) {
  if (typeof targetPosition !== 'number') {
    return Promise.reject(new Error('First argument must be a number'));
  }

  easingStyle = easingStyle || 'linear';
  if (typeof easingStyle !== 'string') {
    return Promise.reject(new Error('Second argument must be a string'));
  }

  /* It is impossible to test a nested setTimeout in jsdom */
  /* istanbul ignore next */
  (async function() {
    const startingPosition = window.pageYOffset;
    const distance = targetPosition - startingPosition;
    const duration = await calculateScrollDuration(distance);
    const framerate = 50;
    const increment = 1000 / framerate;
    let ellapsedTime = 0;
    let easedTime;

    function animateScroll() {
      ellapsedTime += increment;
      easedTime = easing[easingStyle](ellapsedTime / duration);
      next = easedTime * distance + startingPosition;
      window.scroll(0, next);

      if (ellapsedTime < duration) {
        cb();
        setTimeout(animateScroll, increment);
      } else {
        if (cb) {
          cb();
        }
      }
    }

    animateScroll();
  })();
}

export { scrollTo };
