export default function createList(data, isSubList = false) {
  const suffix = isSubList ? '__sub-' : '__';
  const baseClass = 'scroll-nav' + suffix;

  const itemsMarkup = `
    ${data
      .map(
        item =>
          `<li class="${baseClass}item" data-sn-section="${item.id}">
            <a class="${baseClass}link" href="#${item.id}">${item.text}</a>
            ${
              item.subSections && item.subSections.length
                ? `${createList(item.subSections, true)}`
                : ''
            }
          </li>`
      )
      .join('')}
  `;

  const list = `
    <ol class="${baseClass}list">
      ${itemsMarkup}
    </ol>
  `;

  return list;
}
