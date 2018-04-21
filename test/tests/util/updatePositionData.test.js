import updatePositionData from '../../../src/util/updatePositionData';
import { html } from '../../fixtures/sectionMarkup';
import { onlyH2Data, allData } from '../../fixtures/sectionData';

describe('updatePositionData', () => {
  document.body.innerHTML = html;
  const sections = document.querySelectorAll('h2');
  const subSections = document.querySelectorAll('h3');
  subSections[0].id = 'second-heading__1';

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
    subSections.forEach((elem, i) => {
      elem.getBoundingClientRect = () => {
        return {
          bottom: 800,
          height: 25,
          left: 0,
          right: 800,
          top: 450,
          width: 800
        };
      };
    });
  });

  it('should get the correct positions of each section', () => {
    const data = updatePositionData(onlyH2Data);

    expect(data[0].offsetTop).toEqual(200);
    expect(data[1].offsetTop).toEqual(400);
    expect(data[2].offsetTop).toEqual(600);
  });

  it('should get the correct positions of each sub-section', () => {
    const data = updatePositionData(allData);

    expect(data[0].offsetTop).toEqual(200);
    expect(data[1].offsetTop).toEqual(400);
    expect(data[1].subSections[0].offsetTop).toEqual(450);
    expect(data[2].offsetTop).toEqual(600);
  });
});
