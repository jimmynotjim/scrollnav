import createList from './createList';

export default function createNav(data, prefix) {
  const nav = document.createElement('nav');
  nav.className = prefix;
  nav.setAttribute('role', 'navigation');

  nav.innerHTML = createList(data, prefix);

  return nav;
}
