// Largest Number in Array
// Given an integer n, follow the next rules to fill in a new array result.
// • result array is of size num + 1
// • result[0] = 0
// • result[1] = 1
// • result[2 * i] = result[i] when 2 <= 2 * i <= num
// • result [2 * ¡ + 1] = result[i] + result[i + 1] when 2 <= 2 * i + 1 <= num
// Return the largest number in the array result.

// example:
// Input: n = 7
// Output: 3
// Explanation: The generated array result = [0,1,1,2,1,3,2,3], and the largest number is 3.
// Constraints:
// 0 <= n <= 100