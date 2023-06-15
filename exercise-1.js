// Number of Cars on race track at a Given Time
// You are provided with two arrays of integers, "startTime" and "endTime", and an integer "haltime
// Each element "I* in the arrays represents a car's start time and end time for their race. Your task is to determine how many cars were running during the race at "haltTime".
// To be more specific, you need to count the number of cars whose running interval, including start and end time, covers the "haltTime"

// Example 1:
// Input: startTime = [3, 1, 2], endTime = [7, 3, 2], haltTime = 4
// Output: 1
// Explanation: We have 3 cars where:
// The first car started at time 3 and finished at time 7 and was the only car running at time 4.
// The second car started at time 1 and finished at time 3 and wasn't on track at time 4.
// The third car started at time 2 and finished at time 2 and also wasn't on track at time 4.

// Example 2:
// Input: startTime = [4], endTime = [4], haltTime = 4
// Output: 1
// Explanation: The only car was at the race track at the haltTime

// Constraints:
// * startTime.length == endTime.length
// • 1 c= startTime length <= 100
// • 1 <= startTime[i]] <= endTime[i] == 1000
// • 1 <= haltTime = 1000

function countCars(startTime, endTime, haltTime) {
  let count = 0;
  for (let i = 0; i < startTime.length; i++) {
    if (startTime[i] <= haltTime && haltTime <= endTime[i]) {
      count++;
    }
  }
  return count;
}

const startTime = [3, 1, 2];
const endTime = [7, 3, 2];
const haltTime = 4;
console.log(countCars(startTime, endTime, haltTime));  // Output: 1