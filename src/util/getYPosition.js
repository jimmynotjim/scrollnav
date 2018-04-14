export default function getYPosition(elem, parent) {
  if (typeof elem !== 'object') {
    return Promise.reject(new Error('First argument must be an object'));
  }

  parent = parent || document.body;
  if (typeof parent !== 'object') {
    return Promise.reject(new Error('Second argument must be an object'));
  }

  const bodyRect = parent.getBoundingClientRect();
  const elemRect = elem.getBoundingClientRect();

  return elemRect.top - bodyRect.top;
}
