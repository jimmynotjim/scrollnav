import createList from './createList';

export default function createNav(data, prefix, target) {
  const nav = document.createElement('nav');
  nav.className = prefix;
  nav.setAttribute('role', 'navigation');

  nav.innerHTML = createList(data, prefix);

  if (target) {
    target.parentNode.insertBefore(nav, target);
  }
  return nav;
}
