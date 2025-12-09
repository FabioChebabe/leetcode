function countTriples(n: number): number {
  let count = 0;
  for (let a = 1; a <= n; a++) {
    for (let b = 1; b <= n; b++) {
      const cSquared = a * a + b * b;
      const c = Math.sqrt(cSquared);

      if (Number.isInteger(c) && c <= n) {
        count++;
      }
    }
  }

  return count;
}

console.log(countTriples(10));
