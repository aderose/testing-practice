function reverseString(str) {
  if (str === undefined || str === null || str === '') return '';
  if (typeof str !== 'string')
    throw new Error('You can only reverse a String.');
  return str.split('').reverse().join('');
}

module.exports = reverseString;
