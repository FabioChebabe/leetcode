function twoSum(nums: number[], target: number): number[] {
  let i = 1;
  let j = 0;
  let response: number[] = [];
  for (; j < nums.length; j++) {
    for (i = j + 1; i < nums.length; i++) {
      if (nums[i] + nums[j] === target) {
        response = [j, i];
        break;
      }
    }
  }

  return response;
}

console.log("twoSum", twoSum([3, 2, 4], 6));
