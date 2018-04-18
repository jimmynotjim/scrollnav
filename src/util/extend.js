/* Borrowed from https://gist.github.com/cferdinandi/4f8a0e17921c5b46e6c4 */

export default function extend(defaults, options) {
  const extended = {};
  let prop;

  for (prop in defaults) {
    if (Object.prototype.hasOwnProperty.call(defaults, prop)) {
      extended[prop] = defaults[prop];
    }
  }

  for (prop in options) {
    if (Object.prototype.hasOwnProperty.call(options, prop)) {
      extended[prop] = options[prop];
    }
  }

  return extended;
}
