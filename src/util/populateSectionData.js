import getOrSetID from './getOrSetID';
import getYPosition from './getYPosition';
import nextUntil from './nextUntil';

export default function populateSectionData(sections, settings, prefix) {
  const sectionData = [];
  prefix = (prefix || 'scroll-nav') + '__';

  sections.forEach((elem, i) => {
    let subSectionData = [];
    const id = getOrSetID(elem, prefix + (i + 1));

    if (settings.subSections && elem.matches(settings.sections)) {
      const subSectionDom = nextUntil(
        elem,
        settings.sections,
        settings.subSections
      );
      subSectionData = populateSectionData(subSectionDom, settings, id);
    }

    sectionData.push({
      id: id,
      text: elem.innerText || elem.textContent,
      offsetTop: getYPosition(elem),
      subSections: subSectionData
    });
  });

  return sectionData;
}
