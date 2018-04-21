import populateSectionData from '../../../src/util/populateSectionData';
import { html } from '../../fixtures/sectionMarkup';
import { onlyH2Data, allData } from '../../fixtures/sectionData';

describe('populateSectionData', () => {
  document.body.innerHTML = html;
  const sections = document.querySelectorAll('h2');
  const subSections = document.querySelectorAll('h3');
  const settings = {
    sections: 'h2'
  };

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
    const data = populateSectionData(sections, settings);

    expect(data.length).toBe(3);
    expect(data).toEqual(onlyH2Data);
  });

  it('should find and add all h3 elements when showSubItems is enabled', () => {
    settings.subSections = 'h3';
    const data = populateSectionData(sections, settings);
    expect(data[1].subSections.length).toBe(1);
    expect(data[1].subSections).toEqual(allData[1].subSections);
  });
});
