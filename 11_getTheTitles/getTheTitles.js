const getTheTitles = function(books) {
    let titles = [];
    books.forEach((item) => {
        titles.push(item.title);
    });
    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
