const fibonacci = function(num) {
    let convertedNum = parseInt(num);

    if (convertedNum === 0) {
        return 0;
    } else if (convertedNum < 0) {
        return "OOPS";
    } else {
        let firstNum = 0;
        let secNum = 1;
        let nextNum = 1;
        for (let i = 1; i < convertedNum; i++){
            nextNum = firstNum + secNum;
            firstNum = secNum;
            secNum = nextNum;
        };
        return nextNum;
    }
};


// Do not edit below this line
module.exports = fibonacci;
