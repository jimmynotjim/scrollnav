import { scrollTo } from '../src/scrollTo';

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

  xit('should scroll the window to the passed value', () => {
    const callback = jest.fn();
    window.pageYOffset = 2200;

    scrollTo(200, 'null', callback);

    expect(callback).not.toBeCalled();

    jest.advanceTimersByTime(1500);

    expect(callback).toBeCalled();
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
