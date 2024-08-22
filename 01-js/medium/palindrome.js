/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

const { json } = require("react-router-dom");

function isPalindrome(str) {
  // Convert the string to lowercase to ensure case insensitivity
  str = str.toLowerCase();
  
  // Remove all non-alphanumeric characters and spaces
  str = str.replace(/[^a-z0-9]/g, '');

  // Compare the cleaned string with its reverse
  return str === str.split('').reverse().join('');
}

// Example usage:



module.exports = isPalindrome;
