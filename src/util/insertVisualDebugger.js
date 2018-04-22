export default function insertVisualDebugger() {
  const snDebugger = document.createElement('div');
  snDebugger.className = 'snDebugger';

  snDebugger.setAttribute(
    'style',
    `
      position: fixed;
      top: 40%;
      height: 0px;
      border-bottom:5px solid red;
      border-top: 5px solid blue;
      width: 100%;
      opacity: .5;
      pointer-events: none;
    `
  );

  document.body.appendChild(snDebugger);
}
