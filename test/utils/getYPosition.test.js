const WINDOW_TOP = 0;
const PARENT_TOP = 140;
const ELEM_TOP = 260;

describe('getYPosition', () => {
  beforeAll(() => {
    document.body.getBoundingClientRect = () => {
      return {
        bottom: 1000,
        height: 1000,
        left: 0,
        right: 800,
        top: WINDOW_TOP,
        width: 800
      };
    };
  });
  beforeEach(() => {
    this.elem = {};
    this.getYPosition = require('../../src/utils/getYPosition.js');
    this.elem.getBoundingClientRect = () => {
      return {
        bottom: 700,
        height: 40,
        left: 0,
        right: 800,
        top: ELEM_TOP,
        width: 800
      };
    };
  });

  it('should return an error if first param is not an object', () => {
    return expect(this.getYPosition('elem')).rejects.toThrow(
      'First argument must be an object'
    );
  });

  it('should return an error if second param is not an object', () => {
    return expect(this.getYPosition(this.elem, 'parent')).rejects.toThrow(
      'Second argument must be an object'
    );
  });

  it(`should return the Y position of the element relative to the window
      body if no parent is passed`, () => {
    return expect(this.getYPosition(this.elem)).resolves.toEqual(
      ELEM_TOP - WINDOW_TOP
    );
  });

  it(`should return the Y position of the element relative to the window body
      if the window body is passed`, () => {
    return expect(this.getYPosition(this.elem, window.body)).resolves.toEqual(
      ELEM_TOP - WINDOW_TOP
    );
  });

  it(`should return the Y position of the element relative to a parent elem
      if the parent elem is passed`, () => {
    const parentElem = {
      getBoundingClientRect: () => {
        return {
          bottom: 640,
          height: 500,
          left: 0,
          right: 800,
          top: PARENT_TOP,
          width: 800
        };
      }
    };
    return expect(this.getYPosition(this.elem, parentElem)).resolves.toEqual(
      ELEM_TOP - PARENT_TOP
    );
  });
});
