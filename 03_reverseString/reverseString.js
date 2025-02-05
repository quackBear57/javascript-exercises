const reverseString = function(inputString) {
    let outputString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
        outputString += inputString.substr(i,1);
    }
    return outputString;
};

console.log(reverseString("hello"))

// Do not edit below this line
module.exports = reverseString;
