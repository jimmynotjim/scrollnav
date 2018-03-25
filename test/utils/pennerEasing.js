/* Source https://github.com/CharlotteGore/functional-easing */
/* eslint-disable */
Math.linear = function(t, b, c, d) {
  return c * t / d + b;
};

Math.easeInQuad = function(t, b, c, d) {
  return c * (t /= d) * t + b;
};

Math.easeOutQuad = function(t, b, c, d) {
  return -c * (t /= d) * (t - 2) + b;
};

Math.easeInOutQuad = function(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t + b;
  return -c / 2 * (--t * (t - 2) - 1) + b;
  return 0;
};

Math.easeInCubic = function(t, b, c, d) {
  return c * (t /= d) * t * t + b;
};

Math.easeOutCubic = function(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t + 1) + b;
};

Math.easeInOutCubic = function(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t + 2) + b;
};

Math.easeInQuart = function(t, b, c, d) {
  return c * (t /= d) * t * t * t + b;
};

Math.easeOutQuart = function(t, b, c, d) {
  return -c * ((t = t / d - 1) * t * t * t - 1) + b;
};

Math.easeInOutQuart = function(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
  return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
};

Math.easeInQuint = function(t, b, c, d) {
  return c * (t /= d) * t * t * t * t + b;
};

Math.easeOutQuint = function(t, b, c, d) {
  return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
};

Math.easeInOutQuint = function(t, b, c, d) {
  if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
  return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
};
