/**
 * @param {string} eventType - The type of event.
 * @param {HTMLNode} target - Target of the event.
 * @param {Object} eventOption - Options to add to the event.
 * @returns {HTMLNode} The target of the event.
 */
export default function simulateEvent(eventType, target, eventOption) {
  const event = document.createEvent('Event');
  if (eventOption && eventOption.keyCode) {
    event.keyCode = eventOption.keyCode;
  }
  event.initEvent(eventType, true, true);
  return target.dispatchEvent(event);
}
