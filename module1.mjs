import flattenArr from './utils.mjs'

// Part 1: Stack Overflow
// Calculate the maximum size of the JavaScript call stack.

let counter = 0;

function incrementForever() {
  counter++;
  incrementForever();
}

try {
    incrementForever();
} catch (err) {
  console.log(err);
  console.log("The maximum size of the JavaScript call stack is a " + counter);
}

// Part 2:
//Write a recursive function that completely flattens an array of nested arrays, 
//regardless of how deeply nested the arrays are.

// original nested array:
const arr = [[1, [2, 3, [[4, 5], 6]], 7], 8, 9];

// array that will store flattened values:
const result = [];

// flatten the array recursively
flattenArr(arr, result);

// output the flattened array
console.log(result);