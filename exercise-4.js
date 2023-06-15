// Valid Parentheses
// Given a strings containing just the characters '(',  ')',  '{', '}', '[', ']'  determine if the input string is valid.
// An input string is valid if
// 1. Open brackets must be closed by the same type of brackets.
// 2. Open brackets must be closed in the correct order.

function isValidParentheses(s) {
    const stack = [];
    const map = {
      '(': ')',
      '{': '}',
      '[': ']'
    };
  
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
  
      if (char === '(' || char === '{' || char === '[') {
        stack.push(char);
      } else {
        const top = stack.pop();
  
        if (char !== map[top]) {
          return false;
        }
      }
    }
  
    return stack.length === 0;
  }
  
  // Example usage:
  const input1 = '()';            // valid
  const input2 = '()[]{}';        // valid
  const input3 = '(]';            // invalid
  const input4 = '([)]';          // invalid
  const input5 = '{[]}';          // valid
  
  console.log(isValidParentheses(input1));  // true
  console.log(isValidParentheses(input2));  // true
  console.log(isValidParentheses(input3));  // false
  console.log(isValidParentheses(input4));  // false
  console.log(isValidParentheses(input5));  // true
  