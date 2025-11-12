function gcd(a: number, b: number): number {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

function minOperationsOne(nums: number[]): number {
  let totalGcd = nums[0];
  for (let i = 1; i < nums.length; i++) {
    totalGcd = gcd(totalGcd, nums[i]);
  }
  if (totalGcd > 1) return -1;

  const onesCount = nums.filter((num) => num === 1).length;
  if (onesCount > 0) {
    return nums.length - onesCount;
  }

  let minLength = Infinity;
  for (let i = 0; i < nums.length; i++) {
    let currentGcd = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      currentGcd = gcd(currentGcd, nums[j]);
      if (currentGcd === 1) {
        minLength = Math.min(minLength, j - i + 1);
        break;
      }
    }
  }

  return minLength - 1 + (nums.length - 1);
}

console.log(minOperationsOne([2, 6, 3, 4]));
