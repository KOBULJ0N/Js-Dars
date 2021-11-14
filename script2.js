// Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.
// Examples :
/*     task №4    */
// let CamelCase = 'myNameIsQobiljon';

// let string = CamelCase.split(/(?=[A-Z])/).join(' ');

// console.log(string);



// Write a function that takes an integer i and returns an integer with the integer backwards followed by the original integer.
// To illustrate:
// 123
// We reverse 123 to get 321 and then add 123 to the end, resulting in 321123.

// reverseAndNot(123) ➞ 321123

// reverseAndNot(152) ➞ 251152

// reverseAndNot(123456789) ➞ 987654321123456789

// let num = 123;
// for (i = num.length, i < 0, i--) {
//     console.log()
// }


// Create a function that takes in an array (slot machine outcome) and returns true if all elements in the array are identical, and false otherwise. The array will contain 4 elements.
// Examples
// testJackpot(["@", "@", "@", "@"]) ➞ true

// let obj = ['q', 'q', 'q', 'q', 'q','q'];
// let c = 0;

// for (i = 0; i <= obj.length; i++) {
//     if (obj[i] == obj[i + 1])
//         c++;
//     }
// if (c == obj.length) {
//   console.log('true');
// } else {
//   console.log('false');
// }



// Create a function that takes an array and a string as arguments and return the index of the string.


// function findIndex(lst, str) {
//   for (let i = 0; i < lst.length; i++) {
//     if (lst[i] === str) {
//       return i;
//     }
//   }
// }
// // Create a function that takes a base number and an exponent number and returns the calculation.

// // Examples
// calculateExponent(5, 5) ➞ 3125

// calculateExponent(10, 10) ➞ 10000000000

// calculateExponent(3, 3) ➞ 27


// function calculateExponent(num, exp) {
//   return num ** exp;
// }