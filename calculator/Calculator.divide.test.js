const Calculator = require('./Calculator');

test('Return error if incorrect argument data type(s) are used', () => {
  expect(() => Calculator.divide()).toThrow('Requires numerical input');
  expect(() => Calculator.divide(undefined, 0)).toThrow(
    'Requires numerical input',
  );
  expect(() => Calculator.divide(null, 0)).toThrow('Requires numerical input');
  expect(() => Calculator.divide({}, 0)).toThrow('Requires numerical input');
  expect(() => Calculator.divide('', 0)).toThrow('Requires numerical input');
  expect(() => Calculator.divide([], 0)).toThrow('Requires numerical input');
  expect(() => Calculator.divide(true, 0)).toThrow('Requires numerical input');
  expect(() => Calculator.divide(() => {}, 0)).toThrow(
    'Requires numerical input',
  );
});

test('Dividing by zero returns an error', () => {
  expect(() => Calculator.divide(1, 0)).toThrow('Cannot divide by zero.');
});

test('Dividing 1 by 2 returns 0.5', () => {
  expect(Calculator.divide(1, 2)).toBe(0.5);
});

test('Dividing -1 -2 returns 0.5', () => {
  expect(Calculator.divide(-1, -2)).toBe(0.5);
});

test('Dividing -1 by 2 returns -0.5', () => {
  expect(Calculator.divide(-1, 2)).toBe(-0.5);
});

test('Dividing large numbers works', () => {
  expect(Calculator.divide(1000000000, 4000000000)).toBe(0.25);
});

test('Dividing an arbitrary number of arguments works', () => {
  expect(Calculator.divide(1, 2, 5, 4, -10)).toBe(-0.0025);
});

test('Dividing decimal values also works', () => {
  expect(Calculator.divide(1, 0.5)).toBe(2);
});

test('Dividing fractional expressions produces the correct result', () => {
  expect(Calculator.divide(1 / 2, 2 / 3)).toBe(0.75);
});
