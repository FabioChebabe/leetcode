function specialTriplets(nums: number[]): number {
  const MOD = 1_000_000_007;

  const rightCount = new Map<number, number>();
  for (const num of nums) {
    rightCount.set(num, (rightCount.get(num) || 0) + 1);
  }

  const leftCount = new Map<number, number>();

  let result = 0;

  for (const j of nums) {
    rightCount.set(j, rightCount.get(j)! - 1);
    const doubled = j * 2;

    const leftMatches = leftCount.get(doubled) || 0;
    const rightMatches = rightCount.get(doubled) || 0;

    result = (result + leftMatches * rightMatches) % MOD;

    leftCount.set(j, (leftCount.get(j) || 0) + 1);
  }

  return result;
}

console.log(specialTriplets([37, 9, 24, 12, 12, 24, 52, 35]));
