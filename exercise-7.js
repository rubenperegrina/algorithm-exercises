// Number Generator
// A digit-only keyboard contains all 10 digits from 0 to 9. They all exist in one line
// Given a string of 10 digits illustrating how the keys are positioned. To type a digit, you start from index zero to the index of the target digit. It takes |a - b| miliseconds to move from index a to index b
// Write a function to calculate the number of milliseconds needed to type a number with one finger.

// Example 1:
// Input: digits = "0123456789", num = "210"
// Output: 4

// Example 2:
// Input: digits = "8459761203", num = "5439"
// Output: 17

// Constraints:
// • digits.length == 10
// • digits contains each digit [0-9] exactly once in some order.
// • 1 <- num. length <= 10⁴
// •num[i] is digit.

function calculateTypingTime(digits, num) {
    let totalTime = 0;
    let currentIndex = 0;
  
    for (let i = 0; i < num.length; i++) {
      const targetIndex = digits.indexOf(num[i]);
      const time = Math.abs(currentIndex - targetIndex);
      totalTime += time;
      currentIndex = targetIndex;
    }
  
    return totalTime;
  }
  
  // Example usage:
  const digits = "0123456789";
  const num = "210";
  console.log(calculateTypingTime(digits, num)); // Output: 4
  
  const digits2 = "8459761203";
  const num2 = "5439";
  console.log(calculateTypingTime(digits2, num2)); // Output: 17
  