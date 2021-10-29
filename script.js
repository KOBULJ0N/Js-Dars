/*************** Task №1 ************** */
// Function for Method pow

// function pow(a, b) {
//     return a ** b;
// }

// console.log(pow(4, 2));

// Function for Method sqrt

// function sqrt(a) {
//     return a ** 0.5;
// }

// console.log(sqrt(81));

// Function for Method cbrt

// function cbrt(a) {
//   return (a ** (1/3));
// }

//  console.log(cbrt(27));

// Function for Method abs

// function abs(a) {
//     a >= 0 && console.log(a);
    
//     a < 0 && console.log(-a);
// }

// abs(-123)

// Function for Method round

// function round(a) {
//    return (a).toFixed(0);

// }
// console.log(round(1.5))

// Function for Method floor 

// function floor(a) {
//     return parseInt(a);
// }
// console.log(floor(8.9))

// Function for Method floor2 

// function floor(a) {
//   return (a - 0.5).toFixed(0);
// }
// console.log(floor(6.001));



// Function for Method ceil

// function ceil(a) {
//     return (a + 0.5).toFixed(0);
// }
// console.log(ceil(1.001));

// var a = 'Welcom WebBrain ';
// a =a.repeat(5).match(/a/g).length;
// console.log(a);



//  TASK FOR IF ELSE FOR LOOP 

// for (let i = 10; i >= 0; i --) {
//     console.log(i)
// }

// for (let i = 1; i <= 100; i = i + 2) {
//     console.log(i);
// }

// for (let i = 0; i <= 100; i = i + 2) {
//   console.log(i);
// }

// primeNumber(1, 100);
// function primeNumber(from, to) {
//   var flag = false;
//   for (i = from; i <= to; i++) {
//     for (j = 2; j < i; j++) {
//       if (i % j == 0) {
//         flag = false;
//         break;
//       } else {
//         flag = true;
//       }
//     }
//     if (flag) {
//       console.log(i);
//     }
//   }
// }

/******************Task 1************************ */

var str = 'webBrain Academy';
str = str.toLowerCase();
str = str.split(' ').join('');
str = str.repeat(5);
console.log(str);







