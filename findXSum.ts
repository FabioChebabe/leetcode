// function findXSum(nums: number[], k: number, x: number): number[] {
//   let right = k;
//   let left = 0;
//   let xSum: number[] = [];

//   while (right <= nums.length) {
//     const currentArray = nums.slice(left, right);
//     const occurrences = currentArray.reduce(
//       (accumulator, currentValue) => {
//         accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;

//         return accumulator;
//       },
//       {} as Record<number, number>
//     );

//     console.log(occurrences);

//     const sorted = Object.entries(occurrences)
//       .map(([value, count]) => ({ value: Number(value), count }))
//       .sort((a, b) => {
//         if (b.count !== a.count) return b.count - a.count; // maior ocorrência
//         return b.value - a.value; // desempate → maior valor
//       })
//       .slice(0, x)
//       .reduce(
//         (accumulator, currentValue) =>
//           accumulator + currentValue.count * currentValue.value,
//         0
//       );

//     xSum.push(sorted);

//     left += 1;
//     right += 1;
//   }
//   return xSum;
// }

function findXSum(nums: number[], k: number, x: number): number[] {
  const freq = new Map<number, number>();
  const result: number[] = [];

  for (let i = 0; i < k; i++) {
    freq.set(nums[i], (freq.get(nums[i]) ?? 0) + 1);
  }

  const computeSum = () => {
    const top = [...freq.entries()]
      .sort((a, b) => {
        if (b[1] !== a[1]) return b[1] - a[1];
        return b[0] - a[0];
      })
      .slice(0, x)
      .reduce((acc, [value, count]) => acc + value * count, 0);

    return top;
  };

  result.push(computeSum());

  for (let i = k; i < nums.length; i++) {
    const leftVal = nums[i - k];
    const rightVal = nums[i];

    freq.set(leftVal, freq.get(leftVal)! - 1);
    if (freq.get(leftVal)! === 0) freq.delete(leftVal);

    freq.set(rightVal, (freq.get(rightVal) ?? 0) + 1);

    result.push(computeSum());
  }

  return result;
}

console.log(findXSum([1, 1, 2, 2, 3, 4, 2, 3], 6, 2));
