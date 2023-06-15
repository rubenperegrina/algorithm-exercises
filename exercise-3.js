// You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds scores.
// At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops [ig is the ith operation you must apply to the record and is one of the following:
// 1. An integer × - Record a new score of x .
// +* - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores
// Record a new score that is double the previous score. It is guaranteed there will always be a previous score. c" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score.
// Return the sum of all the scores on the record.
// Example 1: 
// Input: ops = ["5", "2","C*, "D", "+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "c" _ Invalidate and remove the previous score, record is now [5].
// "D' - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+** _ Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 - 30.

function baseballGameScore(ops) {
    let record = [];
    for (let op of ops) {
      if (op === 'C') {
        record.pop();
      } else if (op === 'D') {
        let score = record[record.length - 1] * 2;
        record.push(score);
      } else if (op === '+') {
        let score = record[record.length - 1] + record[record.length - 2];
        record.push(score);
      } else {
        let score = parseInt(op);
        record.push(score);
      }
    }
  
    return record.reduce((sum, score) => sum + score, 0);
  }
  
  const ops = ["5", "2", "C", "D", "+"];
  const score = baseballGameScore(ops);
  console.log(score); // Output: 30
  