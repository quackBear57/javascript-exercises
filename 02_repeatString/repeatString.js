const repeatString = function(stringInput, numberToRepeat) {
    if (numberToRepeat < 0) {
        return "ERROR";
    }
    
    let stringOutput = "";
    for (let i = 1; i <= numberToRepeat; i++) {
        stringOutput += stringInput;
    }
    return stringOutput;
};

// Do not edit below this line
module.exports = repeatString;
