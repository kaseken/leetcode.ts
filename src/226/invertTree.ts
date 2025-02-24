import { TreeNode } from '../shared/TreeNode';

const invertTree = (root: TreeNode | null): TreeNode | null => {
  if (root == null) {
    return root;
  }
  return new TreeNode(root.val, invertTree(root.right), invertTree(root.left));
};
