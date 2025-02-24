import { TreeNode } from '../shared/TreeNode';

const sortedArrayToBST = (nums: number[]): TreeNode | null => {
  if (nums.length === 0) {
    return null;
  }
  const midIndex = Math.floor(nums.length / 2);
  return new TreeNode(
    nums[midIndex],
    sortedArrayToBST(nums.slice(0, midIndex)),
    sortedArrayToBST(nums.slice(midIndex + 1, nums.length))
  );
};
