const convertToCelsius = function(tempInF) {
  let tempinC = 0;
  tempinC = (tempInF - 32) * 5 / 9;
  tempinC = Math.round(tempinC * 10) / 10;
  return tempinC;
};

const convertToFahrenheit = function(tempInC) {
  let tempinF = 0;
  tempinF = tempInC * 9 / 5 + 32;
  tempinF = Math.round(tempinF * 10) / 10;
  return tempinF;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
