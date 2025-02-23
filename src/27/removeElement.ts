export const removeElement = (nums: number[], target: number): number => {
  let rIndex = nums.length;
  for (let lIndex = 0; lIndex < nums.length && lIndex < rIndex; lIndex++) {
    if (nums[lIndex] !== target) {
      continue;
    }
    rIndex--;
    while (lIndex < rIndex && nums[rIndex] === target) {
      rIndex--;
    }
    nums[lIndex] = nums[rIndex];
  }
  return rIndex;
};
