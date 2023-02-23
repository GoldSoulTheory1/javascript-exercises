const add = function(a, b) {
  return a + b;
};

const subtract = function(a, b) {
  return a - b;
};

const multiply = function(a, b) {
  return a * b;
};

const divide = function(a, b) {
  if (b === 0) {
    return "Error: division by zero";
  }
  return a / b;
};

const power = function(a, b) {
  return Math.pow(a, b);
};

const factorial = function(a) {
  if (a < 0) {
    return "Error: factorial of negative number";
  }
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
};


// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
