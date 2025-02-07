const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(...args) {
  let total = 0;
  // for (let i = 0; i < args.length; i++) {
  //   total += args[i];
  // }

  args.forEach(element => {
    total += element
  }, 0);

  return total
};

const multiply = function() {

};

const power = function() {
	
};

const factorial = function() {
	
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
