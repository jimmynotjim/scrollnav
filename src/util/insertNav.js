export default function insertNav(scrollNav) {
  const target = scrollNav.settings.insertTarget;
  const location = scrollNav.settings.insertLocation;

  if (location === 'append') {
    target.appendChild(scrollNav.nav);
  } else if (location === 'prepend') {
    target.insertBefore(scrollNav.nav, target.firstChild);
  } else if (location === 'before') {
    target.parentNode.insertBefore(scrollNav.nav, target);
  } else if (location === 'after') {
    target.parentNode.insertBefore(scrollNav.nav, target.nextSibling);
  }
}
