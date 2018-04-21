import createList from './createList';

export default function createNav(data) {
  const nav = document.createElement('nav');
  nav.className = 'scroll-nav';
  nav.innerHTML = createList(data);

  return nav;
}
