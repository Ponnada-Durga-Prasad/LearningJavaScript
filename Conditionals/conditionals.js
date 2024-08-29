// 1. Check If a Number is Positive, Negative, or Zero
// Problem: Write a function that checks whether a given number is positive, negative, or zero, and returns a corresponding message.

function checkNumber(num) {
  if (num > 0) {
    return "The number is positive.";
  } else if (num < 0) {
    return "The number is negative.";
  } else {
    return "The number is zero.";
  }
}

console.log(checkNumber(5));
console.log(checkNumber(-3));
console.log(checkNumber(0));
