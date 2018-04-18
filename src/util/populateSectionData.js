import getOrSetID from './getOrSetID';
import getYPosition from './getYPosition';
import nextUntil from './nextUntil';

export default function populateSectionData(sections, prefix, showSubItems) {
  const sectionData = [];
  prefix = prefix + '__';

  sections.forEach((elem, i) => {
    let subSectionData;
    const id = getOrSetID(elem, prefix + (i + 1));

    if (showSubItems && elem.matches('h2')) {
      const subSectionDom = nextUntil(elem, 'h2', 'h3');
      subSectionData = populateSectionData(subSectionDom, id, false);
    }

    sectionData.push({
      id: id,
      text: elem.innerText || elem.textContent,
      offsetTop: getYPosition(elem),
      subSections: subSectionData || []
    });
  });
  return sectionData;
}
