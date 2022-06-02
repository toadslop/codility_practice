/* eslint-disable no-undef */
import { buildTree } from "./solution.js";

const inorderTraversal = (root, arr = []) => {
    if (!root) return;

    inorderTraversal(root.left, arr);
    arr.push(root.val);
    inorderTraversal(root.right, arr);
    return arr;
}

describe("Construct a binary tree from inorder and postorder traversals", function () {
    it('works for a null tree', function () {
        expect(buildTree([], [])).toBe(null);
    });

    it('works for a tree with one node', function () {
        let inorder = [1];
        let postorder = [1];
        let result = buildTree(inorder, postorder);
        let myInorder = inorderTraversal(result);
        expect(myInorder).toEqual(inorder);
    });

    it('works a balanced tree with 3 nodes', function () {
        let inorder = [2, 1, 3];
        let postorder = [2, 3, 1];
        let result = buildTree(inorder, postorder);
        let myInorder = inorderTraversal(result);

        expect(myInorder).toEqual(inorder);
    });

    it('works an unbalanced tree', function () {
        let inorder = [9, 3, 15, 20, 7];
        let postorder = [9, 15, 7, 20, 3];
        let result = buildTree(inorder, postorder);
        let myInorder = inorderTraversal(result);
        console.log(JSON.stringify(result, null, 2))
        expect(myInorder).toEqual(inorder);
    });
})