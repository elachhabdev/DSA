class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(5);
const b = new Node(11);
const c = new Node(54);
const d = new Node(20);
const e = new Node(15);
const f = new Node(1);
const g = new Node(3);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
e.left = f;
e.right = g;

const maxPathSum = (root) => {
  if (root == null) return -Infinity;

  if (root.left == null && root.right == null) return root.val;

  return root.val + Math.max(maxPathSum(root.left), maxPathSum(root.right));
};

console.log(maxPathSum(a));
