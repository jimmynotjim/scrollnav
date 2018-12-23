import updatePositionData from './util/updatePositionData';

export default function setupResizeHandler(scrollnav) {
  function resizeHandler() {
    scrollnav.data = updatePositionData(scrollnav.data);
  }

  window.addEventListener('resize', resizeHandler);

  return resizeHandler;
}
