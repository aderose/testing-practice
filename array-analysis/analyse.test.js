const analyse = require('./analyse');

test('Throw error if no arguments are provided', () => {
  expect(() => analyse()).toThrow('Missing Arguments');
});

test('Throw error if too many arguments are provided', () => {
  expect(() => analyse(1, 2)).toThrow('Too many arguments provided');
  expect(() => analyse(1, 2, 5, 4, 3)).toThrow('Too many arguments provided');
});

test('Throw error if argument is not an array', () => {
  expect(() => analyse(undefined)).toThrow('Argument must be an array');
  expect(() => analyse(null)).toThrow('Argument must be an array');
  expect(() => analyse(true)).toThrow('Argument must be an array');
  expect(() => analyse(0)).toThrow('Argument must be an array');
  expect(() => analyse({})).toThrow('Argument must be an array');
  expect(() => analyse('')).toThrow('Argument must be an array');
  expect(() => analyse(() => {})).toThrow('Argument must be an array');
});

test('Throw error if array is empty', () => {
  expect(() => analyse([])).toThrow('The provided array is empty');
});

test('Throw error if array contains non-numerical characters', () => {
  expect(() => analyse([1, undefined])).toThrow(
    'Array must contain numbers only',
  );
  expect(() => analyse([1, null])).toThrow('Array must contain numbers only');
  expect(() => analyse([1, true])).toThrow('Array must contain numbers only');
  expect(() => analyse([1, []])).toThrow('Array must contain numbers only');
  expect(() => analyse([1, {}])).toThrow('Array must contain numbers only');
  expect(() => analyse([1, ''])).toThrow('Array must contain numbers only');
  expect(() => analyse([1, () => {}])).toThrow(
    'Array must contain numbers only',
  );
});

test('Analysis of a single value array produces an object of correct values', () => {
  expect(analyse([1])).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1,
  });
});

test('Analysis of a multi-value array produces an object of correct values', () => {
  expect(analyse([1, 2, 3, 4, 5])).toEqual({
    average: 3,
    min: 1,
    max: 5,
    length: 5,
  });
});

test('Analysis of a large array produces an object of correct values', () => {
  expect(analyse(Array.from({ length: 1000 }, () => 1))).toEqual({
    average: 1,
    min: 1,
    max: 1,
    length: 1000,
  });
});
