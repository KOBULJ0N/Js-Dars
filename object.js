/*              Task 1                       */

// ar = [
//   {
//     id: 1,
//     year: 2012,
//     name: 'Eshmat',
//     status: 'student',
//     key: 'test',
//   },

//   {
//     id: 2,
//     year: 2011,
//     name: 'Toshmat',
//     status: 'student',
//     key: 'test',
//   },
//   {
//     id: 3,
//     year: 2010,
//     name: 'Eshmat akasi',
//     status: 'student',
//     key: 'test',
//   },
// ];

// const onDelete = (id) => ar.filter((value) => value.id !== id)
// console.log(onDelete(1));

//  const onSort = () => ar.sort((a, b) => (a.year - b.year));
//  console.log(onSort());




/* 1. Object kalitlari va qiymatlarini tengligini tekshirish */

// const data = { a: 1, b: 1 };
// const data2 = { a: 1, b: 1 };
// const data3 = { a: 1, b: 2 };

// const areEqual = (value1, value2) => {
//   if (Object.values(value1).toString() === Object.values(value2).toString()) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };
// areEqual(data, data2);

// 2. Object ichidagi Objectni qiymatlari mavjudligini tekshirish

// const data = { a: { b: undefined } };
// const data2 = { a: { b: 'it does exits' } };
// const data3 = { a: { b: 'it does exits', innerKey: null } };

// const nestedValueExists = (obj) => {
//   if (obj.a.b === undefined) {
//     return false
//   }
//   else if (obj.a.innerKey === null) {
//     return false
//   }else return true
// }

// console.log(nestedValueExists(data));
// console.log(nestedValueExists(data2));
// console.log(nestedValueExists(data3));

// 3. Object qiymatlari va kalitlari bir xillari borligini tekshirish

// const data = { b: 2,  a: 1, };
// const data2 = {b: 2,  c: 1,  };
// const data3 = { c: 3, b: 5 };

// const checkSame = (value1, value2) => {
//   if(
//     Object.values(value1).toString() === Object.values(value2).toString() ||
//     Object.keys(value1).toString() === Object.keys(value2).toString()
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// };

// console.log(checkSame(data, data2));
// console.log(checkSame(data2, data3));
