class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function heightOfBinaryTree(root) {
  if (root == null) return -Infinity;

  if (root.left == null && root.right == null) return 1;

  return (
    1 + Math.max(heightOfBinaryTree(root.left), heightOfBinaryTree(root.right))
  );
}

const a = new TreeNode(3);
const b = new TreeNode(11);
const c = new TreeNode(4);
const d = new TreeNode(4);
const e = new TreeNode(-2);
const f = new TreeNode(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

console.log(heightOfBinaryTree(a));
