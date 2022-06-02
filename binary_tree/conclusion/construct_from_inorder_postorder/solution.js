export const buildTree = (inorder, postorder) => {
    return buildTree_(new RefSlice(0, inorder.length, inorder), new RefSlice(0, postorder.length, postorder));
}

const buildTree_ = (inorder, postorder) => {
    if (postorder.length <= 0) {
        return null;
    }
    const node = new TreeNode(postorder.get(postorder.length - 1));
    const inorderIdx = inorder.indexOf(node.val);

    if (inorderIdx < 0) {
        return null;
    }

    node.right = buildTree_(RefSlice.fromSlice(inorderIdx + 1, inorder.length, inorder), RefSlice.fromSlice(0, postorder.length - 1, postorder));
    node.left = buildTree_(RefSlice.fromSlice(0, inorderIdx, inorder), RefSlice.fromSlice(0, postorder.length - 2, postorder));
    return node;
};

export class TreeNode {
    constructor(val, left, right) {
        this.val = (val === undefined ? 0 : val)
        this.left = (left === undefined ? null : left)
        this.right = (right === undefined ? null : right)
    }
}

class RefSlice {
    constructor(start, end, arr) {
        this.start = start;
        this.end = end;
        this.arr = arr
        this.length = end - start;
    }

    get(i) {
        if (i < this.start || i >= this.end) {
            return undefined;
        }
        return this.arr[i];
    }

    static fromSlice(start, end, slice) {
        return new RefSlice(start, end, slice.arr)
    }

    indexOf(val) {
        for (let i = this.start; i < this.end; i++) {
            if (this.arr[i] === val) {
                return i;
            }
        }
        return -1;
    }
}