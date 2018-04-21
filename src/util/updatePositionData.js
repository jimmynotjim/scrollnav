import getYPosition from './getYPosition';

export default function updatePostionData(data) {
  data.forEach(section => {
    const sectionDom = document.querySelector(`#${section.id}`);
    section.offsetTop = getYPosition(sectionDom);

    if (section.subSections.length) {
      section.subSections = updatePostionData(section.subSections);
    }
  });

  return data;
}
