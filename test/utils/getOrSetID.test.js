describe('getOrSetID', () => {
  beforeEach(() => {
    this.getOrSetID = require('../../src/utils/getOrSetID.js');
    this.elem = {};
  });

  it('should return an error if first param is not an object', () => {
    return expect(this.getOrSetID('elem')).rejects.toThrow(
      'First argument must be an object'
    );
  });

  it('should return an error if second param is not a string', () => {
    return expect(this.getOrSetID(this.elem, this.elem)).rejects.toThrow(
      'Second argument must be a string'
    );
  });

  it('should return the id property of an element that has an id', () => {
    this.elem.id = 'test-1-id';

    return expect(this.getOrSetID(this.elem)).resolves.toEqual('test-1-id');
  });

  it('should not change the id property of an element that has an id', () => {
    this.elem.id = 'test-1-id';

    return this.getOrSetID(this.elem, 'test-1-fail').then(() => {
      expect(this.elem.id).toEqual('test-1-id');
    });
  });

  it(`should return the passed id argument of an element
      that does not have a defined id proptery`, () => {
    this.elem.id;

    expect(this.elem.id).toEqual(undefined);
    return expect(this.getOrSetID(this.elem, 'test-2-id')).resolves.toEqual(
      'test-2-id'
    );
  });

  it(`should set the id property of an element
      that does not have a defined id property`, () => {
    this.elem.id;

    expect(this.elem.id).toEqual(undefined);
    return this.getOrSetID(this.elem, 'test-2-id').then(() => {
      expect(this.elem.id).toEqual('test-2-id');
    });
  });
});
