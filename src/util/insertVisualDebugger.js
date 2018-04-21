export default function insertVisualDebugger() {
  const snDebugger = document.createElement('div');
  snDebugger.className = 'snDebugger';

  snDebugger.setAttribute(
    'style',
    `
      position: fixed;
      top: 80px;
      height: 33%;
      background: red;
      width: 100%;
      opacity: .25;
      pointer-events: none;
    `
  );

  document.body.appendChild(snDebugger);
}
