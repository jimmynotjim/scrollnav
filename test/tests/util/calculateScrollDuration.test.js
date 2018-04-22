import calculateScrollDuration from '../../../src/util/calculateScrollDuration.js';

describe('calculateScrollDuration', () => {
  const MIN_DURATION = 250;
  const MAX_DURATION = 1200;

  it('should return the minimum duration', () => {
    const duration = calculateScrollDuration(200);

    expect(duration).toBe(MIN_DURATION);
  });

  it('should return the maximum duration', () => {
    const duration = calculateScrollDuration(3000);

    expect(duration).toBe(MAX_DURATION);
  });

  it('should return a duration that is half the distance', () => {
    const duration = calculateScrollDuration(1000);

    expect(duration).toBe(500);
  });
});
