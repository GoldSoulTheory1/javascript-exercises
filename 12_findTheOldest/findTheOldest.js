const getOldestPerson = function(people) {
    let oldest = people[0];
    for (let i = 1; i < people.length; i++) {
      if (people[i].death - people[i].birth > oldest.death - oldest.birth) {
        oldest = people[i];
      }
    }
    return oldest;
  }

// Do not edit below this line
module.exports = findTheOldest;
