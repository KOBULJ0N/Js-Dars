/* ****************************** TASK №1 ************************************ */

// var fruits = ['apple', 12, 'Ananas', 'Orange', 'Banana', 'Kiwi'];
// var number = [10, 5, 11, 'Apple', 2, 3, 4, 5, 6];
// fruits = fruits.join(' ');

// var counterA = 0;
// var  counterB= 0;

// for (i = 0; i < fruits.length; i++) {
//    ( fruits[i].toLowerCase() === 'a') && counterA++;
//    ( fruits[i].toLowerCase() === 'b') && counterB++;
// }

// console.log(counterA + ` ta a harfi bor`);
// console.log(counterB + ` ta b harflari bor`);
// fruits = fruits.split(' ');
// console.log(fruits);

/* ****************************** TASK №2 ************************************ */
// sum //

// var number = [10, 5, 11, 'Apple', 2, 3, 4, 5, 6];
// a = 0;
// for (i = 0; i < number.length; i++) {
//     if (typeof number[i] === 'number') {
//         a += number[i];
//     } else continue;
// }
// console.log(a);

/* ****************************** TASK №4 ************************************ */
// toq index ga just indexlarni qoshish //

// number = [19, 4, 8, 3, 'apple', 9, 10, 5, 7];

// even = 0;
// odd = 0;
// for (i = 0; i < number.length; i += 2) {
//       if (typeof number[i] === 'number') {
//          even += number[i];
//      } else continue;

// }
// for (i = 1; i < number.length; i += 2) {
//     if (typeof number[i] === 'number') {
//        odd += number[i];
//   }else continue

// }

// console.log(even)
// console.log(odd)

/* ****************************** TASK №5 ************************************ */
// Reversee //  1-variant  ////////////////////////////

// ar = [1, 3, 4, 5, 6,];
// newAr = [];

// ar.map((value) => (newAr.unshift(value)))
// console.log(newAr) 
 
// Reversee //  1-variant //////////////////////////////

// var number = [1, 2, 4, 5, 6];

// for (i = number.length - 1 ; i >=0; i--) {
// console.log(number[i])
// }

// Reversee //  1-variant /////////////////////////

// var number = [1, 2, 4, 5, 6, 5, 9];
// let newAr = [];
// for (i = number.length - 1; i >= 0; i--) {
//   newAr[number.length - i -1] = number[i]
// }

// console.log(newAr)
/* ****************************** TASK №6 ************************************ */
//// Eng kichigini kattasi //////////

// number = [19, 4, 8, 3, 9, 10, 5, 7];
// // num = number.sort((a, b) => b - a);
//  num = number.sort((a, b) => a - b);

// console.log(num[num.length - 2]);

// // Eng kichigini kattasi //////////

// number = [19, 4, 8, 3, 9, 10, 5, 7];
// num = number.sort((a, b) => a - b);

//  console.log(num[1]);

///////////////////////////////////////////////////////////////////////

// function lastElement(arr) {
//     if (arr.length > 0) {
//         return arr[arr.length - 1]
//     } else {
//         return null
//     }
// }
// console.log(lastElement([7, 5, 6]));

///////////////////////////////////////////////////////////

