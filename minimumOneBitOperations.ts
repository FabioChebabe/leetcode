function minimumOneBitOperations(n: number): number {
  if (n === 0) return 0;

  let highest = 1;

  while (highest << 1 <= n) highest <<= 1;

  return 2 * highest - 1 - minimumOneBitOperations(n - highest);
}

console.log(minimumOneBitOperations(13));
