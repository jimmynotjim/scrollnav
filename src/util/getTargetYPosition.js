export default function getTargetYPosition(target, data) {
  let id = target.getAttribute('href');
  if (id.charAt(0) === '#') {
    id = id.substr(1);
  }

  const targetSection = filterData(data, id);

  return targetSection.offsetTop;
}

function filterData(data, id) {
  let targetSection;

  data.forEach(section => {
    if (section.id === id) {
      targetSection = section;
    }

    if (section.subSections && targetSection === undefined) {
      targetSection = filterData(section.subSections, id);
    }
  });

  return targetSection;
}
