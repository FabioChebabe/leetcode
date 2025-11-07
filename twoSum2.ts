// function twoSum(numbers: number[], target: number): number[] {
//   let left = 0;
//   const response: number[] = [];

//   while (left < numbers.length - 1) {
//     for (let i = left + 1; i < numbers.length; i++) {
//       if (numbers[left] + numbers[i] === target) {
//         response.push(left + 1, i + 1);
//         return response;
//       }
//     }
//     left += 1;
//   }

//   return response;
// }

function twoSum(numbers: number[], target: number): number[] {
  let left = 0;
  let right = numbers.length - 1;

  while (left <= right) {
    if (numbers[left] + numbers[right] > target) {
      right--;
    }
    if (numbers[left] + numbers[right] < target) {
      left++;
    }
    if (numbers[left] + numbers[right] === target) {
      return [left + 1, right + 1];
    }
  }

  return [];
}

console.log(twoSum([1, 3, 4, 4], 8));
// console.log(twoSum([-1, 0], -1));
