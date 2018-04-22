export default function teardownResizelHandler(resizeHandler) {
  window.removeEventListener('resize', resizeHandler);
}
