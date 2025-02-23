const reverse = (nums: number[], start: number, end: number) => {
  end--;
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

const rotate = (nums: number[], k: number) => {
  k = k % nums.length;
  reverse(nums, 0, nums.length);
  reverse(nums, 0, k);
  reverse(nums, k, nums.length);
};
