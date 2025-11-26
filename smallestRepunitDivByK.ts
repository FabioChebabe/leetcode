function smallestRepunitDivByK(k: number): number {
  if (k % 2 === 0 || k % 5 === 0) return -1;

  let remainder = 1 % k;
  let length = 1;

  while (remainder !== 0) {
    remainder = (remainder * 10 + 1) % k;
    length++;
  }

  return length;
}

console.log(smallestRepunitDivByK(2));
