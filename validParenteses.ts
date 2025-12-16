// function isValid(s: string): boolean {
//   const stack = s.split('');
//   const result: string[] = [];

//   stack.forEach((char, index) => {
//     if (char === '(' || char === '{' || char === '[') {
//       result.push(char);
//     } else {
//       if (result[result.length - 1] === '(' && char === ')') {
//         result.pop();
//       } else if (result[result.length - 1] === '{' && char === '}') {
//         result.pop();
//       } else if (result[result.length - 1] === '[' && char === ']') {
//         result.pop();
//       } else {
//         result.push(char);
//       }
//     }
//   });

//   return result.length === 0;
// }

function isValid(s: string): boolean {
  const stack: string[] = [];
  const pairs: Record<string, string> = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const char of s) {
    if (char in pairs) {
      if (stack.pop() !== pairs[char]) {
        return false;
      }
    } else {
      stack.push(char);
    }
  }

  return stack.length === 0;
}

isValid(']');
