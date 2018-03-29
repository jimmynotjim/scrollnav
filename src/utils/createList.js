export default function createList(data, prefix, showSubItems) {
  const baseClass = prefix + '__';
  const list = document.createElement('ol');
  list.className = baseClass + 'list';

  const itemsMarkup = `
    ${data
      .map(
        item =>
          `<li class="${prefix}__item">
            <a class="${prefix}__link" href="#${item.id}">${item.text}</a>
            ${
              showSubItems && item.subSections.length
                ? `${createSubList(item.subSections, prefix)}`
                : ''
            }
          </li>`
      )
      .join()}
  `;

  list.innerHTML = itemsMarkup;

  return list;
}

function createSubList(data, prefix) {
  const baseClass = prefix + '__sub-';

  const subListMarkup = `
    <ol class="${baseClass}list">
      ${data
        .map(
          item =>
            `<li class="${baseClass}item">
              <a class="${baseClass}link" href="#${item.id}">${item.text}</a>
            </li>`
        )
        .join('')}
    </ol>
  `;
  return subListMarkup;
}
