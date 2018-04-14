/* Borrowed from https://gist.github.com/gre/1650294#gistcomment-1806616 */

const easeIn = p => t => Math.pow(t, p);
const easeOut = p => t => 1 - Math.abs(Math.pow(t - 1, p));
const easeInOut = p => t =>
  t < 0.5 ? easeIn(p)(t * 2) / 2 : easeOut(p)(t * 2 - 1) / 2 + 0.5;

const easing = {
  linear: easeInOut(1),
  easeInQuad: easeIn(2),
  easeOutQuad: easeOut(2),
  easeInOutQuad: easeInOut(2),
  easeInCubic: easeIn(3),
  easeOutCubic: easeOut(3),
  easeInOutCubic: easeInOut(3),
  easeInQuart: easeIn(4),
  easeOutQuart: easeOut(4),
  easeInOutQuart: easeInOut(4),
  easeInQuint: easeIn(5),
  easeOutQuint: easeOut(5),
  easeInOutQuint: easeInOut(5)
};

export { easing };
