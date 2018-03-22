import jestDomCustomMatchers from '@jarmee/jest-dom-custom-matchers';
import insertVisualDebugger from '../../../src/util/insertVisualDebugger';

expect.extend(jestDomCustomMatchers);

describe('insertVisualDebugger', () => {
  it('should insert the debugger with the correct dimensions', () => {
    insertVisualDebugger();

    const debuggerDom = document.querySelector('.snDebugger');

    expect(debuggerDom).toBeHTMLElement('div');
    expect(debuggerDom).toHaveClass('snDebugger');
  });
});
