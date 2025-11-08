// function decrypt(code: number[], k: number): number[] {
//   const response: number[] = [];

//   for (let i = 0; i < code.length; i++) {
//     if (k > 0) {
//       let j = 0;
//       let sum = 0;
//       let currentPosition = i + 1;
//       while (j < k) {
//         if (currentPosition >= code.length) {
//           currentPosition = 0;
//         }
//         sum += code[currentPosition];
//         currentPosition++;
//         j++;
//       }
//       response.push(sum);
//     }
//     if (k < 0) {
//       let j = 0;
//       let sum = 0;
//       let currentPosition = i - 1;
//       while (j > k) {
//         if (currentPosition < 0) {
//           currentPosition = code.length - 1;
//         }
//         sum += code[currentPosition];
//         currentPosition--;
//         j--;
//       }
//       response.push(sum);
//     }
//     if (k === 0) {
//       return code.map(() => 0);
//     }
//   }

//   return response;
// }

function decrypt(code: number[], k: number): number[] {
  const n = code.length;
  if (k === 0) return new Array(n).fill(0);

  const prefix = new Array(2 * n + 1).fill(0);
  for (let i = 0; i < 2 * n; i++) {
    prefix[i + 1] = prefix[i] + code[i % n];
  }

  const res = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    if (k > 0) {
      res[i] = prefix[i + k + 1] - prefix[i + 1];
    } else {
      res[i] = prefix[i + n] - prefix[i + n + k];
    }
  }
  return res;
}

console.log(decrypt([5, 7, 1, 4], 3));
console.log(decrypt([2, 4, 9, 3], -2));
console.log(decrypt([1, 2, 3, 4], 0));
