import calculateEasedTimes from '../../src/utils/calculateEasedTimes';

describe('calculateEasedTimes', () => {
  it('should return a linear array', () => {
    const expectedTimes = [
      { time: 0, easedTime: 0 },
      { time: 20, easedTime: 0.2 },
      { time: 40, easedTime: 0.4 },
      { time: 60, easedTime: 0.6 },
      { time: 80, easedTime: 0.8 },
      { time: 100, easedTime: 1 }
    ];
    const linearTimes = calculateEasedTimes('linear', 100, 50);
    expect(linearTimes).toEqual(expectedTimes);
  });

  it('should return a easeInOutQuint array', () => {
    const expectedTimes = [
      { time: 0, easedTime: 0 },
      { time: 20, easedTime: 0.005120000000000003 },
      { time: 40, easedTime: 0.1638400000000001 },
      { time: 60, easedTime: 0.8361599999999999 },
      { time: 80, easedTime: 0.99488 },
      { time: 100, easedTime: 1 }
    ];
    const easeInOutQuintTimes = calculateEasedTimes('easeInOutQuint', 100, 50);

    expect(easeInOutQuintTimes).toEqual(expectedTimes);
  });
});
