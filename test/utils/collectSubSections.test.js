import collectSubSections from '../../src/utils/collectSubSections';
import { html } from '../fixtures/sectionMarkup.js';

describe('collectSubSections', () => {
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

  it('should return the subsections that belong to a section', () => {
    const data = collectSubSections(sections[1]);
    expect(data.length).toBe(1);
    expect(data).toEqual([subSections[0]]);
  });
});
