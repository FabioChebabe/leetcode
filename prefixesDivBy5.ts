function prefixesDivBy5(nums: number[]): boolean[] {
  const answer = [];
  let current = 0;

  for (let bit of nums) {
    current = (current * 2 + bit) % 5;
    answer.push(current === 0);
  }

  return answer;
}

console.log(
  prefixesDivBy5([
    1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0,
    0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1,
    0, 0, 1, 1, 0, 0, 1, 1, 1,
  ])
);
