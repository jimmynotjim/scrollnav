export default function teardownScrollHandler(scrollHandler) {
  window.removeEventListener('scroll', scrollHandler);
}
