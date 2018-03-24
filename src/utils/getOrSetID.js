function getOrSetID(elem, setID) {
  return new Promise((resolve, reject) => {
    if (typeof elem !== 'object') {
      return reject(new Error('First argument must be an object'));
    }

    let id = elem.id;

    if (!id) {
      if (typeof setID !== 'string') {
        return reject(new Error('Second argument must be a string'));
      }

      id = setID;
      elem.id = id;
    }
    resolve(id);
  });
}

module.exports = getOrSetID;
