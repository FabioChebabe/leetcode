// function countPartitions(nums: number[]): number {
//   let count = 0;
//   for (let i = 1; i < nums.length; i++) {
//     const firstArray = nums
//       .slice(0, i)
//       .reduce((acc, currentValue) => acc + currentValue, 0);
//     const secondArray = nums
//       .slice(i, nums.length)
//       .reduce((acc, currentValue) => acc + currentValue, 0);

//     const difference = firstArray - secondArray;
//     if (difference % 2 === 0) {
//       count++;
//     }
//   }

//   return count;
// }
function countPartitions(nums: number[]): number {
  let count = 0;
  const totalSum = nums.reduce((acc, n) => acc + n, 0);
  let prefixSum = 0;

  for (let i = 0; i < nums.length - 1; i++) {
    prefixSum += nums[i];

    const firstArray = prefixSum;
    const secondArray = totalSum - prefixSum;

    if ((firstArray - secondArray) % 2 === 0) {
      count++;
    }
  }

  return count;
}

countPartitions([2, 4, 6, 8]);
