const Calculator = require('./Calculator');

test('Return error if incorrect argument data type(s) are used', () => {
  expect(() => Calculator.multiply()).toThrow('Requires numerical input');
  expect(() => Calculator.multiply(undefined, 0)).toThrow(
    'Requires numerical input',
  );
  expect(() => Calculator.multiply(null, 0)).toThrow(
    'Requires numerical input',
  );
  expect(() => Calculator.multiply({}, 0)).toThrow('Requires numerical input');
  expect(() => Calculator.multiply('', 0)).toThrow('Requires numerical input');
  expect(() => Calculator.multiply([], 0)).toThrow('Requires numerical input');
  expect(() => Calculator.multiply(true, 0)).toThrow(
    'Requires numerical input',
  );
  expect(() => Calculator.multiply(() => {}, 0)).toThrow(
    'Requires numerical input',
  );
});

test('Multiplying positive numbers produces a positive number', () => {
  expect(Calculator.multiply(1, 2)).toBe(2);
});

test('Multiplying negative numbers produces a positive number', () => {
  expect(Calculator.multiply(-1, -2)).toBe(2);
});

test('Multiplying positive and negative numbers produces a negative number', () => {
  expect(Calculator.multiply(1, -2)).toBe(-2);
});

test('Multiplying by zero produces zero', () => {
  expect(Calculator.multiply(1, 0)).toBe(0);
});

test('Multiplying large numbers works', () => {
  expect(Calculator.multiply(10000, 4000)).toBe(40000000);
});

test('Multiplying an arbitrary number of arguments works', () => {
  expect(Calculator.multiply(1, 2, 5, 4, 6, 3, 34, 54)).toBe(1321920);
});

test('Multiplying decimal values also works', () => {
  expect(Calculator.multiply(0.45, 1.62, 1.2, 0.52)).toBeCloseTo(0.454896);
});

test('Multiplying fractional expressions produces the correct result', () => {
  expect(Calculator.multiply(5 / 4, 3 / 2)).toBe(1.875);
});
