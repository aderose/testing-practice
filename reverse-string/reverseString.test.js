const reverseString = require('./reverseString');

test('Reversing nothing returns a blank string', () => {
  expect(reverseString()).toBe('');
});

test('Reverse null returns a blank string', () => {
  expect(reverseString(null)).toBe('');
});

test('Reverse a blank string returns a blank string', () => {
  expect(reverseString('')).toBe('');
});

test('Reverse a number returns an error', () => {
  expect(() => reverseString(5)).toThrow('You can only reverse a String.');
});

test('Reverse an object returns an error', () => {
  expect(() => reverseString({})).toThrow('You can only reverse a String.');
});

test('Reverse an array returns an error', () => {
  expect(() => reverseString([])).toThrow('You can only reverse a String.');
});

test('Reverse a boolean returns an error', () => {
  expect(() => reverseString(true)).toThrow('You can only reverse a String.');
});

test('Reverse a function returns an error', () => {
  expect(() => reverseString(() => {})).toThrow(
    'You can only reverse a String.',
  );
});

test('Reverse a character returns itself', () => {
  expect(reverseString('a')).toBe('a');
});

test('Reversing a text string returns itself reversed', () => {
  expect(reverseString('hello')).toBe('olleh');
});

test('Reversing with capitalization works the same', () => {
  expect(reverseString('HeLlo')).toBe('olLeH');
});

test('Reversing a string with non-text characters works the same', () => {
  expect(reverseString('H3l!o0$^£%()@')).toBe('@)(%£^$0o!l3H');
});
