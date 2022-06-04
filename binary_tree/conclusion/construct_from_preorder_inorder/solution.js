export const buildTree = (
  preorder,
  inorder,
  inorder_start = 0,
  inorder_end = inorder.length
) => {
  if (inorder_end - inorder_start <= 0) return null;
  preorder.s = typeof preorder.s === "number" ? preorder.s + 1 : 0;
  const node = new TreeNode(preorder[preorder.s]);
  let root_idx = -1;

  for (let i = inorder_start; i < inorder_end; i++) {
    if (inorder[i] === node.val) {
      root_idx = i;
    }
  }

  node.left = buildTree(preorder, inorder, inorder_start, root_idx);
  node.right = buildTree(preorder, inorder, root_idx + 1, inorder_end);

  return node;
};

export class TreeNode {
  constructor(val, left, right) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}
