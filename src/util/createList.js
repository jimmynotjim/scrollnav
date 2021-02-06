export default function createList(data, isSubList = false) {
  const suffix = isSubList ? '__sub-' : '__';
  const baseClass = 'scroll-nav' + suffix;

  let olElem = document.createElement('ol');
  olElem.classList.add(baseClass + 'list');

  data.forEach(function(item) {
    let liElem = document.createElement('li');
    liElem.classList.add(baseClass + 'item');
    liElem.setAttribute('data-sn-section', item.id);
    olElem.appendChild(liElem);

    let aElem = document.createElement('a');
    aElem.classList.add(baseClass + 'link');
    aElem.setAttribute('href', '#' + item.id);
    let linkText = document.createTextNode(item.text);
    aElem.appendChild(linkText);
    liElem.appendChild(aElem);

    if (item.subSections.length) {
      let subList = createList(item.subSections, true);
      liElem.appendChild(subList);
    }
  });

  return olElem;
}
