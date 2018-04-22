export default function teardownClickHandlers(nav, clickHandler) {
  const links = nav.querySelectorAll('a');
  links.forEach(link => {
    link.removeEventListener('click', clickHandler);
  });
}
