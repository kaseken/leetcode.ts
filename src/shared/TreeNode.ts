export class TreeNode<T = number> {
  val: T;
  left: TreeNode<T> | null;
  right: TreeNode<T> | null;

  constructor(val: T, left: TreeNode<T> | null, right: TreeNode<T> | null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}
