// 1-Misol

// function isTriangle(side1, side2, side3) {
//     return side1 + side2 > side3 && side1 + side3 > side2 && side2 + side3 > side1;
// }





// 2-Misol

// function generateRange(start, end) {
//     let result = [];
//     for (let i = start; i <= end; i++) {
//         result.push(i);
//     }
//     return result;
// }





// 3-Misol

// function sumNumbers(n) {
//     if (typeof n !== 'number'  n < 1  !Number.isInteger(n)) {
//       return "Please provide a positive integer.";
//     }
  
//     let sum = 0;
//     for (let i = 1; i <= n; i++) {
//       sum += i;
//     }
//     return sum;
// }
  
// console.log(sumNumbers(5)); 
// console.log(sumNumbers(10)); 
// console.log(sumNumbers(-3));
// console.log(sumNumbers("abc"));





// 4-Misol

// function isNumberInRange(number, rangeObj) {
//     if (typeof number !== 'number'  typeof rangeObj !== 'object'  
//         typeof rangeObj.min !== 'number' || typeof rangeObj.max !== 'number') {
//       return false;
//     }
  
//     return number >= rangeObj.min && number <= rangeObj.max;
// }
  
// const range = { min: 5, max: 10 };
// console.log(isNumberInRange(7, range)); 
// console.log(isNumberInRange(3, range)); 
// console.log(isNumberInRange(12, range));



// 5-Misol


// function isNumberInRange(number, rangeObj) {
//     if (typeof number !== 'number'  typeof rangeObj !== 'object' 
//         !('min' in rangeObj)  !('max' in rangeObj) 
//         typeof rangeObj.min !== 'number' || typeof rangeObj.max !== 'number') {
//       return false;
//     }
  
//     return number >= rangeObj.min && number <= rangeObj.max;
// }
  
// const range = { min: 5, max: 10 };
// console.log(isNumberInRange(7, range)); 
// console.log(isNumberInRange(3, range)); 
// console.log(isNumberInRange(12, range)); 