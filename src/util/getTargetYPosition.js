export default function getTargetYPosition(target, data) {
  let id = target.getAttribute('href');
  if (id.charAt(0) === '#') {
    id = id.substr(1);
  }

  const section = data.filter(section => section.id === id)[0];
  return section.offsetTop;
}
