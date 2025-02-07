const palindromes = function (stringToCheck) {
    let cleanerString = stringToCheck.toLowerCase().trim();
    let cleanestString = cleanerString.replace(/[^\w\s\']|_/g, "").replace(/\s/g, '');

    let reversedString = "";
    for (let i = cleanestString.length - 1; i >= 0; i--){
        reversedString += cleanestString.substr(i,1);
    };
    return (reversedString === cleanestString);
};

// Do not edit below this line
module.exports = palindromes;
