import scrollTo from '../../src/scrollTo';

jest.useFakeTimers();

describe('scrollTo', () => {
  it('should return an error if the first param is not a number', () => {
    return expect(scrollTo('string')).rejects.toThrow(
      'First argument must be a number'
    );
  });

  it('should return an error if the second param is not a string', () => {
    return expect(scrollTo(200, 400)).rejects.toThrow(
      'Second argument must be a string'
    );
  });

  xit('should resolve a Promise after scrolling', async () => {
    expect.assertions(1);

    const callback = jest.fn();
    window.pageYOffset = 2200;

    await scrollTo(200, null).then(() => {
      callback();
    });

    jest.runAllTimers();

    expect(callback).toBeCalled();
  });
});
