export default function insertNav(scrollnav) {
  const target = scrollnav.settings.insertTarget;
  const location = scrollnav.settings.insertLocation;

  if (location === 'append') {
    target.appendChild(scrollnav.nav);
  } else if (location === 'prepend') {
    target.insertBefore(scrollnav.nav, target.firstChild);
  } else if (location === 'before') {
    target.parentNode.insertBefore(scrollnav.nav, target);
  } else if (location === 'after') {
    target.parentNode.insertBefore(scrollnav.nav, target.nextSibling);
  }
}
