export default function collectSubSections(heading) {
  const subSectionsDom = [];
  let nextSibling = heading.nextSibling;

  while (nextSibling && nextSibling.tagName !== 'H2') {
    if (nextSibling.tagName === 'H3') {
      subSectionsDom.push(nextSibling);
    }

    nextSibling = nextSibling.nextSibling;
  }

  return subSectionsDom;
}
