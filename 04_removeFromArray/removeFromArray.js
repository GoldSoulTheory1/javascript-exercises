const removeFromArray = function(array, ...args) {
    return array.filter(item => !args.includes(item));
  };

console.log(removeFromArray([1, 2, 3, 4], 2, 4));

// Do not edit below this line
module.exports = removeFromArray;
