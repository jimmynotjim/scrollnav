import { easing } from './easing';

export default function calculateEasedTimes(easingStyle, duration, framerate) {
  const easedTimes = [{ time: 0, easedTime: 0 }];
  const increment = 1000 / framerate;
  let ellapsedTime = 0;
  let easedTime;

  while (ellapsedTime < duration) {
    ellapsedTime += increment;
    easedTime = easing[easingStyle](ellapsedTime / duration);
    easedTimes.push({ time: ellapsedTime, easedTime: easedTime });
  }

  //console.log(easedTimes);
  return easedTimes;
}
