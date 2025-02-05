const removeFromArray = function(inputArray, ...args) {
    for (let arg of args) {
        let i = 0;
        while (i < inputArray.length) {
            if (inputArray[i] === arg) {
                inputArray.splice(i, 1);
            } else {
                i++;
            }
        }
    }

    return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
