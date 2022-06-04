/* eslint-disable no-undef */
import { buildTree } from "./solution.js";

const inorderTraversal = (root, arr = []) => {
  if (!root) return;

  inorderTraversal(root.left, arr);
  arr.push(root.val);
  inorderTraversal(root.right, arr);
  return arr;
};

describe("The construct a binary tree from inorder and preorder traversals algorithm", function () {
  it("works for a null tree", function () {
    expect(buildTree([], [])).toBe(null);
  });

  it("works for a tree with one node", function () {
    let inorder = [1];
    let preorder = [1];
    let result = buildTree(preorder, inorder);
    let myInorder = inorderTraversal(result);
    expect(myInorder).toEqual(inorder);
  });

  it("works a balanced tree with 3 nodes", function () {
    let inorder = [2, 1, 3];
    let preorder = [1, 2, 3];
    let result = buildTree(preorder, inorder);
    let myInorder = inorderTraversal(result);

    expect(myInorder).toEqual(inorder);
  });

  it("works an unbalanced tree", function () {
    let inorder = [9, 3, 15, 20, 7];
    let preorder = [3, 9, 20, 15, 7];
    let result = buildTree(preorder, inorder);
    let myInorder = inorderTraversal(result);
    expect(myInorder).toEqual(inorder);
  });

  it("works for the reverse of the unbalanced tree", function () {
    let inorder = [7, 20, 15, 3, 9];
    let preorder = [3, 20, 7, 15, 9];
    let result = buildTree(preorder, inorder);
    let myInorder = inorderTraversal(result);
    expect(myInorder).toEqual(inorder);
  });
});
