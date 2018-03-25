require('./pennerEasing');

import { easing } from '../../src/utils/easing';

describe('easing', () => {
  const VAL_1 = 1;
  const VAL_2 = 0.5;
  const VAL_3 = 0.25;
  const B = 0;
  const C = 1;
  const D = 1;

  it('should equal Penner linear', () => {
    expect(easing.linear(VAL_1)).toBe(Math.linear(VAL_1, B, C, D));
    expect(easing.linear(VAL_2)).toBe(Math.linear(VAL_2, B, C, D));
    expect(easing.linear(VAL_3)).toBe(Math.linear(VAL_3, B, C, D));
  });

  it('should equal Penner easeInQuad', () => {
    expect(easing.easeInQuad(VAL_1)).toBe(Math.easeInQuad(VAL_1, B, C, D));
    expect(easing.easeInQuad(VAL_2)).toBe(Math.easeInQuad(VAL_2, B, C, D));
    expect(easing.easeInQuad(VAL_3)).toBe(Math.easeInQuad(VAL_3, B, C, D));
  });

  it('should equal Penner easeOutQuad', () => {
    expect(easing.easeOutQuad(VAL_1)).toBe(Math.easeOutQuad(VAL_1, B, C, D));
    expect(easing.easeOutQuad(VAL_2)).toBe(Math.easeOutQuad(VAL_2, B, C, D));
    expect(easing.easeOutQuad(VAL_3)).toBe(Math.easeOutQuad(VAL_3, B, C, D));
  });

  it('should equal Penner easeInOutQuad', () => {
    expect(easing.easeInOutQuad(VAL_1)).toBe(
      Math.easeInOutQuad(VAL_1, B, C, D)
    );
    expect(easing.easeInOutQuad(VAL_2)).toBe(
      Math.easeInOutQuad(VAL_2, B, C, D)
    );
    expect(easing.easeInOutQuad(VAL_3)).toBe(
      Math.easeInOutQuad(VAL_3, B, C, D)
    );
  });

  it('should equal Penner easeInCubic', () => {
    expect(easing.easeInCubic(VAL_1)).toBe(Math.easeInCubic(VAL_1, B, C, D));
    expect(easing.easeInCubic(VAL_2)).toBe(Math.easeInCubic(VAL_2, B, C, D));
    expect(easing.easeInCubic(VAL_3)).toBe(Math.easeInCubic(VAL_3, B, C, D));
  });

  it('should equal Penner easeOutCubic', () => {
    expect(easing.easeOutCubic(VAL_1)).toBe(Math.easeOutCubic(VAL_1, B, C, D));
    expect(easing.easeOutCubic(VAL_2)).toBe(Math.easeOutCubic(VAL_2, B, C, D));
    expect(easing.easeOutCubic(VAL_3)).toBe(Math.easeOutCubic(VAL_3, B, C, D));
  });

  it('should equal Penner easeInOutCubic', () => {
    expect(easing.easeInOutCubic(VAL_1)).toBe(
      Math.easeInOutCubic(VAL_1, B, C, D)
    );
    expect(easing.easeInOutCubic(VAL_2)).toBe(
      Math.easeInOutCubic(VAL_2, B, C, D)
    );
    expect(easing.easeInOutCubic(VAL_3)).toBe(
      Math.easeInOutCubic(VAL_3, B, C, D)
    );
  });

  it('should equal Penner easeInQuart', () => {
    expect(easing.easeInQuart(VAL_1)).toBe(Math.easeInQuart(VAL_1, B, C, D));
    expect(easing.easeInQuart(VAL_2)).toBe(Math.easeInQuart(VAL_2, B, C, D));
    expect(easing.easeInQuart(VAL_3)).toBe(Math.easeInQuart(VAL_3, B, C, D));
  });

  it('should equal Penner easeOutQuart', () => {
    expect(easing.easeOutQuart(VAL_1)).toBe(Math.easeOutQuart(VAL_1, B, C, D));
    expect(easing.easeOutQuart(VAL_2)).toBe(Math.easeOutQuart(VAL_2, B, C, D));
    expect(easing.easeOutQuart(VAL_3)).toBe(Math.easeOutQuart(VAL_3, B, C, D));
  });

  it('should equal Penner easeInOutQuart', () => {
    expect(easing.easeInOutQuart(VAL_1)).toBe(
      Math.easeInOutQuart(VAL_1, B, C, D)
    );
    expect(easing.easeInOutQuart(VAL_2)).toBe(
      Math.easeInOutQuart(VAL_2, B, C, D)
    );
    expect(easing.easeInOutQuart(VAL_3)).toBe(
      Math.easeInOutQuart(VAL_3, B, C, D)
    );
  });

  it('should equal Penner easeInQuint', () => {
    expect(easing.easeInQuint(VAL_1)).toBe(Math.easeInQuint(VAL_1, B, C, D));
    expect(easing.easeInQuint(VAL_2)).toBe(Math.easeInQuint(VAL_2, B, C, D));
    expect(easing.easeInQuint(VAL_3)).toBe(Math.easeInQuint(VAL_3, B, C, D));
  });

  it('should equal Penner easeOutQuint', () => {
    expect(easing.easeOutQuint(VAL_1)).toBe(Math.easeOutQuint(VAL_1, B, C, D));
    expect(easing.easeOutQuint(VAL_2)).toBe(Math.easeOutQuint(VAL_2, B, C, D));
    expect(easing.easeOutQuint(VAL_3)).toBe(Math.easeOutQuint(VAL_3, B, C, D));
  });

  it('should equal Penner easeInOutQuint', () => {
    expect(easing.easeInOutQuint(VAL_1)).toBe(
      Math.easeInOutQuint(VAL_1, B, C, D)
    );
    expect(easing.easeInOutQuint(VAL_2)).toBe(
      Math.easeInOutQuint(VAL_2, B, C, D)
    );
    expect(easing.easeInOutQuint(VAL_3)).toBe(
      Math.easeInOutQuint(VAL_3, B, C, D)
    );
  });
});
