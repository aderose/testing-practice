const capitalize = require('./capitalize');

test('Capitalize nothing returns a blank string', () => {
  expect(capitalize()).toBe('');
});

test('Capitalize null returns a blank string', () => {
  expect(capitalize(null)).toBe('');
});

test('Capitalize a blank string returns a blank string', () => {
  expect(capitalize('')).toBe('');
});

test('Capitalize a number returns an error', () => {
  expect(() => capitalize(5)).toThrow('You can only capitalize a String.');
});

test('Capitalize an object returns an error', () => {
  expect(() => capitalize({})).toThrow('You can only capitalize a String.');
});

test('Capitalize an array returns an error', () => {
  expect(() => capitalize([])).toThrow('You can only capitalize a String.');
});

test('Capitalize a boolean returns an error', () => {
  expect(() => capitalize(true)).toThrow('You can only capitalize a String.');
});

test('Capitalize a function returns an error', () => {
  expect(() => capitalize(() => {})).toThrow(
    'You can only capitalize a String.',
  );
});

test('Capitalize a character returns that character capitalized', () => {
  expect(capitalize('a')).toBe('A');
});

test('Capitalize word returns word with first letter capitalized', () => {
  expect(capitalize('foobar')).toBe('Foobar');
});

test('Capitalize string with spaces returns string with first letter capitalized', () => {
  expect(capitalize('foo bar')).toBe('Foo bar');
});

test('Capitalize capitalized string returns the same string', () => {
  expect(capitalize('Foobar')).toBe('Foobar');
});

test('Capitalize string with non-text character as first letter returns the same string', () => {
  expect(capitalize('6oobar')).toBe('6oobar');
});
