const myBubbleSort = require('./littleMath');

arrTest = [3,5,1,4];
arrResult = [1,3,4,5];

console.log(arrTest);
myBubbleSort(arrTest)
console.log(arrTest);


console.assert(arrTest[0] == arrResult[0], "Test passed");
// ---> for JEST npm i jest-cli -g
// test("Returns a sorted array", () => {
//     expect(myBubbleSort(arrTest)).toBe(arrResult);
// });

