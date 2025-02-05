const sumAll = function(sumStart, sumEnd) {
    if (sumStart < 0 || sumEnd < 0 ||
        !Number.isInteger(sumStart) || !Number.isInteger(sumEnd)) {
        return "ERROR";
    }
    
    let sumOutput = 0;
    for (let i = Math.min(sumStart,sumEnd);
        i <= Math.max(sumStart, sumEnd);
         i++) {
        sumOutput += i;
    }
    return sumOutput;
};

// Do not edit below this line
module.exports = sumAll;
