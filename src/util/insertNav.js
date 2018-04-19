export default function insertNav(nav, settings) {
  const target = settings.insertTarget;
  const location = settings.insertLocation;

  if (location === 'append') {
    target.appendChild(nav);
  } else if (location === 'prepend') {
    target.insertBefore(nav, target.firstChild);
  } else if (location === 'before') {
    target.parentNode.insertBefore(nav, target);
  } else if (location === 'after') {
    target.parentNode.insertBefore(nav, target.nextSibling);
  }
}
