function capitalize(text) {
  if (text === undefined || text === null || text === '') return '';
  if (typeof text !== 'string') {
    throw new Error('You can only capitalize a String.');
  }
  return text[0].toUpperCase() + text.slice(1);
}

module.exports = capitalize;
