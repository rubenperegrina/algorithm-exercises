// Given an array, rotate the array to the right by k steps, where k is non-negative.
// Example 1:
// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// After rotating 1 steps to the right, array becomes: [7, 1,2,3,4,5,6]
// After rotating 2 steps to the right, array becomes: [6,7, 1,2,3,4,5]
// After rotating 3 steps to the right, array becomes: [5,6,7, 1,2,3,4]
// Example 2:
// Input: nums = [-1, -100,3,99], k = 2
// Output: [3, 99,-1,-100]
// Explanation:
// After rotating 1 steps to the right, array becomes: [99,-1,-100,3]
// After rotating 2 steps to the right, array becomes: [3,99,-1,-100]

function rotate(nums, k) {
    const n = nums.length;
    k %= n;
    const result = [...nums];
  
    for (let i = 0; i < n; i++) {
      const newIndex = (i + k) % n;
      result[newIndex] = nums[i];
    }
  
    for (let i = 0; i < n; i++) {
      nums[i] = result[i];
    }
  }
  
  // Example usage:
  const nums = [1, 2, 3, 4, 5, 6, 7];
  const k = 3;
  rotate(nums, k);
  console.log(nums); // Output: [5, 6, 7, 1, 2, 3, 4]
  
  const nums2 = [-1, -100, 3, 99];
  const k2 = 2;
  rotate(nums2, k2);
  console.log(nums2); // Output: [3, 99, -1, -100]
  