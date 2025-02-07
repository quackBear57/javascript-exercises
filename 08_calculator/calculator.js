const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(toTotal) {
  return toTotal.reduce((total, arg) => total + arg, 0);
};

const multiply = function(toMultiply) {
  return toMultiply.reduce((total, arg) => total * arg, 1);
};

const power = function(a, b) {
  let total = 1;
  for (let i = 0; i < b; i++) {
    total = total * a;
  };
  return total;
};

const factorial = function(n) {
	if (n === 0) {
    return 1;
  } else {
    let total = 1;
    for (let i = n; i > 0; i--) {
      total = total * i;
    };
    return total;
  };
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
