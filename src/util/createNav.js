import createList from './createList';

export default function createNav(data, prefix, settings) {
  const nav = document.createElement('nav');
  nav.className = prefix;
  nav.setAttribute('role', 'navigation');

  nav.innerHTML = createList(data, prefix);

  if (settings.insertTarget) {
    settings.insertTarget.parentNode.insertBefore(nav, settings.insertTarget);
  }
  return nav;
}
