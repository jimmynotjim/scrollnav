import getOrSetID from '../../src/utils/getOrSetID';

describe('getOrSetID', () => {
  let elem;
  beforeEach(() => {
    elem = {};
  });

  it('should return an error if first param is not an object', () => {
    return expect(getOrSetID('elem')).rejects.toThrow(
      'First argument must be an object'
    );
  });

  it('should return an error if second param is not a string', () => {
    return expect(getOrSetID(elem, elem)).rejects.toThrow(
      'Second argument must be a string'
    );
  });

  it('should return the id property of an element that has an id', () => {
    elem.id = 'test-1-id';

    return expect(getOrSetID(elem)).resolves.toEqual('test-1-id');
  });

  it('should not change the id property of an element that has an id', () => {
    elem.id = 'test-1-id';

    return getOrSetID(elem, 'test-1-fail').then(() => {
      expect(elem.id).toEqual('test-1-id');
    });
  });

  it(`should return the passed id argument of an element
      that does not have a defined id proptery`, () => {
    elem.id;

    expect(elem.id).toEqual(undefined);
    return expect(getOrSetID(elem, 'test-2-id')).resolves.toEqual('test-2-id');
  });

  it(`should set the id property of an element
      that does not have a defined id property`, () => {
    elem.id;

    expect(elem.id).toEqual(undefined);
    return getOrSetID(elem, 'test-2-id').then(() => {
      expect(elem.id).toEqual('test-2-id');
    });
  });
});
