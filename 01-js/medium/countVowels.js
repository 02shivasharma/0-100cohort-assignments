/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
   const vowels = new Set(['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']);
  
  // Initialize a counter for vowels
  let count = 0;

  // Iterate over each character in the string
  for (let char of str) {
    // If the character is a vowel, increment the count
    if (vowels.has(char)) {
      count++;
    }
  }

  // Return the total count of vowels
  return count;
}

module.exports = countVowels;