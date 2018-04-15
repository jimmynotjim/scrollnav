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

  return activeSection;
}
