const Calculator = {
  add() {
    return this.operate((a, b) => a + b, false, arguments);
  },

  subtract() {
    return this.operate((a, b) => a - b, false, arguments);
  },

  divide() {
    return this.operate((a, b) => a / b, true, arguments);
  },

  multiply() {
    return this.operate((a, b) => a * b, false, arguments);
  },

  operate(operator, isDividing, args) {
    return this.getInputArray(args, isDividing).reduce((total, arg) =>
      operator(total, arg),
    );
  },

  getInputArray(inputs, isDividing) {
    const inputArray = [...inputs];
    if (inputArray.length === 0) throw new Error('Requires numerical input');
    inputArray.forEach((arg) => {
      if (typeof arg !== 'number') {
        throw new Error('Requires numerical input');
      }
    });
    if (isDividing && inputArray.slice(1).indexOf(0) >= 0)
      throw new Error('Cannot divide by zero.');
    return inputArray;
  },
};

module.exports = Calculator;
