import setupResizeHandler from '../../src/setupResizeHandler';
import teardownResizeHandler from '../../src/teardownResizeHandler';
import { html } from '../fixtures/sectionMarkup';
import { onlyH2Data } from '../fixtures/sectionData';
import simulateEvent from '../util/simulateEvent';
const scrollNav = {
  data: onlyH2Data
};

describe('setupResizeHandler', () => {
  document.body.innerHTML = html;
  const sections = document.querySelectorAll('h2');
  const resizeHandler = setupResizeHandler(scrollNav);

  beforeAll(() => {
    document.body.getBoundingClientRect = () => {
      return {
        bottom: 1000,
        height: 1000,
        left: 0,
        right: 800,
        top: 0,
        width: 800
      };
    };
    sections.forEach((elem, i) => {
      elem.getBoundingClientRect = () => {
        return {
          bottom: 800,
          height: 100,
          left: 0,
          right: 800,
          top: 200 * (i + 1),
          width: 800
        };
      };
    });
  });

  it('should not update the data when the window is resized', () => {
    teardownResizeHandler(resizeHandler);

    const target = simulateEvent('resize', window);
    const data = scrollNav.data;

    expect(data[0].offsetTop).toEqual(100);
    expect(data[1].offsetTop).toEqual(200);
    expect(data[2].offsetTop).toEqual(300);
  });
});
