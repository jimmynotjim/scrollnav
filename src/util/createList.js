export default function createList(data, prefix, isSubList = false) {
  const suffix = isSubList ? '__sub-' : '__';
  const baseClass = prefix + suffix;

  const itemsMarkup = `
    ${data
      .map(
        item =>
          `<li class="${baseClass}item" data-sn-section="${item.id}">
            <a class="${baseClass}link" href="#${item.id}">${item.text}</a>
            ${
              item.subSections && item.subSections.length
                ? `${createList(item.subSections, prefix, true)}`
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
