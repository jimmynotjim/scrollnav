export default function getActiveSection(data, boundryTop, boundryBottom) {
  let activeSection;

  data.forEach(section => {
    if (section.offsetTop > boundryBottom) {
      if (!activeSection && section.offsetTop < boundryTop) {
        activeSection = section;
      }
    } else {
      activeSection = section;
    }
  });

  if (activeSection && activeSection.subSections.length) {
    let activeSubSection;

    activeSubSection = getActiveSection(
      activeSection.subSections,
      boundryTop,
      boundryBottom
    );

    if (activeSubSection) {
      activeSection = activeSubSection;
    }
  }

  return activeSection;
}
