import setupResizeHandler from '../../src/setupResizeHandler';
import teardownResizeHandler from '../../src/teardownResizeHandler';
import { html } from '../fixtures/sectionMarkup';
import { onlyH2Data } from '../fixtures/sectionData';
import simulateEvent from '../util/simulateEvent';

describe('setupResizeHandler', () => {
  let sections;
  let scrollnav;
  let resizeHandler;

  beforeAll(() => {
    document.body.innerHTML = html;
    sections = document.querySelectorAll('h2');
    scrollnav = {
      data: onlyH2Data
    };
    resizeHandler = setupResizeHandler(scrollnav);

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

    simulateEvent('resize', window);
    const data = scrollnav.data;

    expect(data[0].offsetTop).toEqual(100);
    expect(data[1].offsetTop).toEqual(200);
    expect(data[2].offsetTop).toEqual(300);
  });
});
