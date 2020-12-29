const caesar = require('./caesar');

test('Throw error if no arguments are provided', () => {
  expect(() => caesar()).toThrow('Missing Arguments');
});

test('Throw error if plaintext is not a string', () => {
  expect(() => caesar(undefined, 0)).toThrow('Plaintext must be a string');
  expect(() => caesar(null, 0)).toThrow('Plaintext must be a string');
  expect(() => caesar(true, 0)).toThrow('Plaintext must be a string');
  expect(() => caesar(0, 0)).toThrow('Plaintext must be a string');
  expect(() => caesar({}, 0)).toThrow('Plaintext must be a string');
  expect(() => caesar([], 0)).toThrow('Plaintext must be a string');
  expect(() => caesar(() => {}, 0)).toThrow('Plaintext must be a string');
});

test('Throw error if shift is not a number', () => {
  expect(() => caesar('a', undefined)).toThrow('Shift must be a number');
  expect(() => caesar('a', null)).toThrow('Shift must be a number');
  expect(() => caesar('a', true)).toThrow('Shift must be a number');
  expect(() => caesar('a', '')).toThrow('Shift must be a number');
  expect(() => caesar('a', {})).toThrow('Shift must be a number');
  expect(() => caesar('a', [])).toThrow('Shift must be a number');
  expect(() => caesar('a', () => {})).toThrow('Shift must be a number');
});

test('Throw error if decimal shift is provided', () => {
  expect(() => caesar('a', 0.1)).toThrow('Shift must be an integer');
});

test('Shifting "A" by 0 returns "A" and maintains case', () => {
  expect(caesar('A', 0)).toBe('A');
  expect(caesar('a', 0)).toBe('a');
});

test('Shifting "A" by 6 produces "G"', () => {
  expect(caesar('A', 6)).toBe('G');
  expect(caesar('a', 6)).toBe('g');
});

test('Shifting a non-text character returns itself', () => {
  expect(caesar('£', 0)).toBe('£');
  expect(caesar('£', -5)).toBe('£');
  expect(caesar('£', 14)).toBe('£');
  expect(caesar('£', 100)).toBe('£');
});

test('Shifting "A" by -1 produces "Z"', () => {
  expect(caesar('A', -1)).toBe('Z');
  expect(caesar('a', -1)).toBe('z');
});

test('Shifting "A" by 26 produces "A"', () => {
  expect(caesar('A', 26)).toBe('A');
  expect(caesar('a', 26)).toBe('a');
});

test('Shifting "A" by 100 produces "W"', () => {
  expect(caesar('A', 100)).toBe('W');
  expect(caesar('a', 100)).toBe('w');
});

test('Shifting "hello" by 5 gives "mjqqt"', () => {
  expect(caesar('HELLO', 5)).toBe('MJQQT');
  expect(caesar('hello', 5)).toBe('mjqqt');
});

test('Shifting a mixed case word maintains case', () => {
  expect(caesar('HelLo', 5)).toBe('MjqQt');
});

test('Do nothing to non-text characters', () => {
  expect(caesar('My name is Bob! You?', 2)).toBe('Oa pcog ku Dqd! Aqw?');
});
