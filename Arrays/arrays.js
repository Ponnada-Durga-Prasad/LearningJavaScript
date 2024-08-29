// 1. Find the Maximum Number in an Array
// Problem: Write a function that takes an array of numbers as input and returns the largest number.

function findMax(arr) {
  if (arr.length === 0) return undefined; // Handle empty array
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

const numbers = [3, 5, 7, 2, 8, 6];
console.log(findMax(numbers));
