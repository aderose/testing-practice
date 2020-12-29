function analyse(array) {
  if (arguments.length === 0) throw new Error('Missing Arguments');
  if (arguments.length > 1) throw new Error('Too many arguments provided');
  if (!Array.isArray(array)) throw new Error('Argument must be an array');
  if (array.length === 0) throw new Error('The provided array is empty');
  array.forEach((element) => {
    if (typeof element !== 'number') {
      throw new Error('Array must contain numbers only');
    }
  });
  return {
    average: array.reduce((sum, el) => sum + el, 0) / array.length,
    min: Math.min(...array),
    max: Math.max(...array),
    length: array.length,
  };
}

module.exports = analyse;
