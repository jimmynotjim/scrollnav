import getYPosition from './getYPosition';

export default function updatePositionData(data) {
  data.forEach(section => {
    const sectionDom = document.querySelector(`#${section.id}`);
    section.offsetTop = getYPosition(sectionDom);

    if (section.subSections.length) {
      section.subSections = updatePositionData(section.subSections);
    }
  });

  return data;
}
