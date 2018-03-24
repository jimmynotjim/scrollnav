function getYPosition(elem, parent) {
  return new Promise((resolve, reject) => {
    if (typeof elem !== 'object') {
      return reject(new Error('First argument must be an object'));
    }

    parent = parent || document.body;
    if (typeof parent !== 'object') {
      return reject(new Error('Second argument must be an object'));
    }

    const bodyRect = parent.getBoundingClientRect();
    const elemRect = elem.getBoundingClientRect();

    resolve(elemRect.top - bodyRect.top);
  });
}

module.exports = getYPosition;
