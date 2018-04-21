import setupResizeHandler from '../../src/setupResizeHandler';
import { html } from '../fixtures/sectionMarkup';
import { onlyH2Data } from '../fixtures/sectionData';
import simulateEvent from '../util/simulateEvent';

describe('setupResizeHandler', () => {
  let sections;
  let scrollNav;

  beforeAll(() => {
    document.body.innerHTML = html;
    sections = document.querySelectorAll('h2');
    scrollNav = {
      data: onlyH2Data
    };

    setupResizeHandler(scrollNav);

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

  it('should update the data when the window is resized', () => {
    simulateEvent('resize', window);

    const data = scrollNav.data;

    expect(data[0].offsetTop).toEqual(200);
    expect(data[1].offsetTop).toEqual(400);
    expect(data[2].offsetTop).toEqual(600);
  });
});
