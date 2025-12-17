function kLengthApart(nums: number[], k: number): boolean {
  let space = 0;
  let findFirstOne = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      if (space < k && i !== 0 && findFirstOne) {
        return false;
      }
      space = 0;
      findFirstOne = true;
    } else {
      space++;
    }
  }
  return true;
}

console.log(kLengthApart([0, 1, 0, 0, 1, 0, 0, 1], 2));
