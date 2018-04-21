export default function insertVisualDebugger() {
  const snDebugger = document.createElement('div');
  snDebugger.className = 'snDebugger';

  snDebugger.setAttribute(
    'style',
    `
      position: fixed;
      top: 8.33333%;
      height: 33.33333%;
      background: red;
      width: 100%;
      opacity: .25;
      pointer-events: none;
    `
  );

  document.body.appendChild(snDebugger);
}
