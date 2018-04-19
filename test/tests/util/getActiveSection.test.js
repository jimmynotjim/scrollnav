import getActiveSection from '../../../src/util/getActiveSection';
import { onlyH2Data, allData } from '../../fixtures/sectionData';

describe('getActiveSection', () => {
  it('should return the first section when it falls within the range', () => {
    const activeSection = getActiveSection(onlyH2Data, 50, 180);

    expect(activeSection).toEqual(onlyH2Data[0]);
  });

  it('should return the second section when it falls within the range', () => {
    const activeSection = getActiveSection(onlyH2Data, 150, 280);

    expect(activeSection).not.toEqual(onlyH2Data[0]);
    expect(activeSection).toEqual(onlyH2Data[1]);
  });

  it('should return undefined when no section falls within the range', () => {
    const activeSection = getActiveSection(onlyH2Data, 0, 80);

    expect(activeSection).toEqual(undefined);
  });

  it(`should return the sub-section and not it's parent when it falls within the
    range`, () => {
    const activeSection = getActiveSection(allData, 150, 280);

    expect(activeSection).not.toEqual(allData[1]);
    expect(activeSection).toEqual(allData[1].subSections[0]);
  });
});
