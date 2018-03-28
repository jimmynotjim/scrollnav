import getOrSetID from './getOrSetID';
import getYPosition from './getYPosition';
import collectSubSections from './collectSubSections';

function populateSectionData(sections, prefix, showSubItems) {
  const sectionData = [];
  prefix = prefix + '__';

  sections.forEach((elem, i) => {
    let subSectionData;
    const id = getOrSetID(elem, prefix + (i + 1));

    if (showSubItems && elem.tagName === 'H2') {
      const subSectionDom = collectSubSections(elem);
      subSectionData = populateSectionData(subSectionDom, id);
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

export { populateSectionData };
