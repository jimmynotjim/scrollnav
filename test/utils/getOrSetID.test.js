describe('getOrSetID', () => {
  beforeEach(() => {
    this.getOrSetID = require('../../src/utils/getOrSetID.js');
    this.elem = {};
  });

  it('should return the id of an element that has an id', () => {
    this.elem.id = 'test-1-id';
    const returnedID = this.getOrSetID(this.elem, 'test-1-fail');

    expect(returnedID).not.toBeUndefined();
    expect(returnedID).toEqual('test-1-id');
    expect(returnedID).not.toEqual('test-1-fail');
    expect(this.elem.id).not.toEqual('test-1-fail');
  });

  it('should set the id of an element that does not have an id', () => {
    const initialID = this.elem.id;
    const returnedID = this.getOrSetID(this.elem, 'test-2-id');

    expect(initialID).toEqual(undefined);
    expect(this.elem.id).toEqual('test-2-id');
    expect(returnedID).toEqual('test-2-id');
  });
});
