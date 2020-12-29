const UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const LOWER = 'abcdefghijklmnopqrstuvwxyz';

Number.prototype.mod = function (n) {
  return ((this % n) + n) % n;
};

function caesar(plaintext, shift) {
  if (arguments.length === 0) throw new Error('Missing Arguments');
  if (typeof plaintext !== 'string')
    throw new Error('Plaintext must be a string');
  if (typeof shift !== 'number') throw new Error('Shift must be a number');
  if (parseInt(shift) !== shift) throw new Error('Shift must be an integer');
  return plaintext
    .split('')
    .map((character) => {
      return encodeCharacter(character, shift);
    })
    .join('');
}

function encodeCharacter(character, shift) {
  if (!/[A-Za-z]/.test(character)) return character;
  if (character.toUpperCase() === character) {
    return UPPER[(UPPER.indexOf(character) + shift).mod(26)];
  }
  return LOWER[(LOWER.indexOf(character) + shift).mod(26)];
}

module.exports = caesar;
