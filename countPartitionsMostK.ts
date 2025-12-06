function countPartitions(nums: number[], k: number): number {
  const MOD = 1_000_000_007;
  const n = nums.length;

  const dp = new Array(n + 1).fill(0);
  dp[0] = 1;

  // prefix[i] = dp[0] + dp[1] + ... + dp[i-1]
  const prefix = new Array(n + 2).fill(0);
  prefix[1] = dp[0];

  // Deques para max/min
  const maxDeque: number[] = [];
  const minDeque: number[] = [];

  let left = 0;

  for (let right = 0; right < n; right++) {
    const value = nums[right];

    // Atualiza max deque
    while (maxDeque.length && nums[maxDeque[maxDeque.length - 1]] < value) {
      maxDeque.pop();
    }
    maxDeque.push(right);

    // Atualiza min deque
    while (minDeque.length && nums[minDeque[minDeque.length - 1]] > value) {
      minDeque.pop();
    }
    minDeque.push(right);

    // Move left até ficar válido
    while (nums[maxDeque[0]] - nums[minDeque[0]] > k) {
      if (maxDeque[0] === left) maxDeque.shift();
      if (minDeque[0] === left) minDeque.shift();
      left++;
    }

    // Agora left..right forma somente intervalos válidos
    // dp[right+1] = soma dp[left] até dp[right]
    dp[right + 1] = (prefix[right + 1] - prefix[left] + MOD) % MOD;

    // Atualiza prefix sum
    prefix[right + 2] = (prefix[right + 1] + dp[right + 1]) % MOD;
  }

  return dp[n];
}

console.log(countPartitions([3, 3, 4], 0));
