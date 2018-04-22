import extend from '../../../src/util/extend';

describe('extend', () => {
  const defaults = {
    number: 1,
    bool: true,
    magic: 'real',
    animal: 'whale',
    croutons: 'delicious'
  };

  const options = {
    number: 2,
    magic: 'real',
    animal: 'porpoise',
    bool: false,
    random: 42
  };

  it('should merge two objects', () => {
    const expected = {
      animal: 'porpoise',
      bool: false,
      croutons: 'delicious',
      magic: 'real',
      number: 2,
      random: 42
    };

    expect(extend(defaults, options)).toEqual(expected);
  });
});
