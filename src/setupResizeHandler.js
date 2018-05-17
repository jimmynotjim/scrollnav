import updatePositionData from './util/updatePositionData';

export default function setupResizeHandler(scrollNav) {
  function resizeHandler() {
    scrollNav.data = updatePositionData(scrollNav.data);
  }

  window.addEventListener('resize', resizeHandler);

  return resizeHandler;
}
