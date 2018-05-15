import 'babel-polyfill';

window.scrollTo = window.scroll = (xVal, yVal) => {
  window.pageXOffset = xVal;
  window.pageYOffset = yVal;
};

window.scrollBy = (xVal, yVal) => {
  const xStart = window.getPageXOffset;
  const yStart = window.getPageYOffset;
  window.pageXOffset = xStart + xVal;
  window.pageYOffset = yStart + yVal;
};
