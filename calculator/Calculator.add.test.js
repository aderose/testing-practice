const Calculator = require('./Calculator');

test('Return error if incorrect argument data type(s) are used', () => {
  expect(() => Calculator.add()).toThrow('Requires numerical input');
  expect(() => Calculator.add(undefined, 0)).toThrow(
    'Requires numerical input',
  );
  expect(() => Calculator.add(null, 0)).toThrow('Requires numerical input');
  expect(() => Calculator.add({}, 0)).toThrow('Requires numerical input');
  expect(() => Calculator.add('', 0)).toThrow('Requires numerical input');
  expect(() => Calculator.add([], 0)).toThrow('Requires numerical input');
  expect(() => Calculator.add(true, 0)).toThrow('Requires numerical input');
  expect(() => Calculator.add(() => {}, 0)).toThrow('Requires numerical input');
});

test('Adding positive numbers produces a positive number', () => {
  expect(Calculator.add(1, 2)).toBe(3);
});

test('Adding negative numbers produces a negative number', () => {
  expect(Calculator.add(-1, -2)).toBe(-3);
});

test('Adding large numbers works', () => {
  expect(Calculator.add(1000000000, 4020000000)).toBe(5020000000);
});

test('Adding an arbitrary number of arguments works', () => {
  expect(Calculator.add(1, 2, 5, 4, 6, 3, 34, 54, 433453)).toBe(433562);
});

test('Adding decimal values also works', () => {
  expect(Calculator.add(0.45, 0.892, 1.42, 1.849194)).toBe(4.611194);
});

test('Adding fractional expressions produces the correct result', () => {
  expect(Calculator.add(5 / 4, 3 / 2, 1 / 8, 1 / 16)).toBe(2.9375);
});
