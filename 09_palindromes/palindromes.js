str = str.toLowerCase().replace(/[^a-z0-9]/g, '');

// Check if the string is the same forwards and backwards
for (let i = 0; i < str.length / 2; i++) {
  if (str[i] !== str[str.length - 1 - i]) {
    return false;
  }
}
return true;
};


// Do not edit below this line
module.exports = palindromes;
