import { populateSectionData } from '../../src/utils/populateSectionData';
import { html } from '../fixtures/sectionMarkup.js';

describe('populateSectionData', () => {
  document.body.innerHTML = html;
  const sections = document.querySelectorAll('h2');
  const subSections = document.querySelectorAll('h3');

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
          top: 100 * (i + 1),
          width: 800
        };
      };
    });
    subSections.forEach((elem, i) => {
      elem.getBoundingClientRect = () => {
        return {
          bottom: 800,
          height: 25,
          left: 0,
          right: 800,
          top: 225,
          width: 800
        };
      };
    });
  });

  it('should find and add all h2 elements to the array', () => {
    const data = populateSectionData(sections, 'scrollNav');

    expect(data.length).toBe(3);
    expect(data).toEqual([
      {
        id: 'first-heading',
        text: 'First heading',
        offsetTop: 100,
        subSections: []
      },
      {
        id: 'second-heading',
        text: 'Second heading',
        offsetTop: 200,
        subSections: []
      },
      {
        id: 'third-heading',
        text: 'Third heading',
        offsetTop: 300,
        subSections: []
      }
    ]);
  });

  it('should find and add all h3 elements when showSubItems is enabled', () => {
    const data = populateSectionData(sections, 'scrollNav', true);
    expect(data[1].subSections.length).toBe(1);
    expect(data[1].subSections).toEqual([
      {
        id: 'second-heading__1',
        text: 'First sub-heading of the second heading',
        offsetTop: 225,
        subSections: []
      }
    ]);
  });
});
