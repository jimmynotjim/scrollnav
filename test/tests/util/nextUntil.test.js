import nextUntil from '../../../src/util/nextUntil';
import { html } from '../../fixtures/sectionMarkup.js';

describe('nextUntil', () => {
  let sections;
  let subSections;

  beforeAll(() => {
    document.body.innerHTML = html;
    sections = document.querySelectorAll('h2');
    subSections = document.querySelectorAll('h3');
  });

  it('should return the subsections that belong to a section', () => {
    const data = nextUntil(sections[1], 'h2', 'h3');

    expect(data.length).toBe(1);
    expect(data).toEqual([subSections[0]]);
  });
});
