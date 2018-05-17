export default function getOrSetID(elem, setID) {
  if (typeof elem !== 'object') {
    return Promise.reject(new Error('First argument must be an object'));
  }

  let id = elem.id;

  if (!id) {
    if (typeof setID !== 'string') {
      return Promise.reject(new Error('Second argument must be a string'));
    }

    id = setID;
    elem.id = id;
  }
  return id;
}
