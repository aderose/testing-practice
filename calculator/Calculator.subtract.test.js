const Calculator = require('./Calculator');

test('Return error if incorrect argument data type(s) are used', () => {
  expect(() => Calculator.subtract()).toThrow('Requires numerical input');
  expect(() => Calculator.subtract(undefined, 0)).toThrow(
    'Requires numerical input',
  );
  expect(() => Calculator.subtract(null, 0)).toThrow(
    'Requires numerical input',
  );
  expect(() => Calculator.subtract({}, 0)).toThrow('Requires numerical input');
  expect(() => Calculator.subtract('', 0)).toThrow('Requires numerical input');
  expect(() => Calculator.subtract([], 0)).toThrow('Requires numerical input');
  expect(() => Calculator.subtract(true, 0)).toThrow(
    'Requires numerical input',
  );
  expect(() => Calculator.subtract(() => {}, 0)).toThrow(
    'Requires numerical input',
  );
});

test('Subtracting 2 from 1 returns -1', () => {
  expect(Calculator.subtract(1, 2)).toBe(-1);
});

test('Subtracting -2 from -1 returns 1', () => {
  expect(Calculator.subtract(-1, -2)).toBe(1);
});

test('Subtracting large numbers works', () => {
  expect(Calculator.subtract(1000000000, 4020000000)).toBe(-3020000000);
});

test('Subtracting an arbitrary number of arguments works', () => {
  expect(Calculator.subtract(1, 2, 5, 4, 6, 3, 34, 54, 433453)).toBe(-433560);
});

test('Subtracting decimal values also works', () => {
  expect(Calculator.subtract(0.45, 0.892, 1.42, 1.849194)).toBe(-3.711194);
});

test('Subtracting fractional expressions produces the correct result', () => {
  expect(Calculator.subtract(5 / 4, 3 / 2, 1 / 8, 1 / 16)).toBe(-0.4375);
});
