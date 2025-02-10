const findTheOldest = function(people) {
    people.forEach((person) => {
        if(!("yearOfDeath" in person)) {
            const d = new Date();
            const year = d.getFullYear();
            person.yearOfDeath = year;
        }
    });
    
    const oldest = people.sort(function(firstPerson, secondPerson) {
        const lastGuy = firstPerson.yearOfDeath - firstPerson.yearOfBirth;
        const nextGuy = secondPerson.yearOfDeath - secondPerson.yearOfBirth;
        return lastGuy > nextGuy ? -1 : 1;
        });
    return oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
