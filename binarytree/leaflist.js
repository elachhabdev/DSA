class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");
const e = new Node("e");

a.right = b;
b.left = c;
c.right = d;
d.right = e;

const Leaves = (root) => {
  if (root == null) return [];

  if (root.left == null && root.right == null) return [root.val];

  return [...Leaves(root.left), ...Leaves(root.right)];
};

const LeavesRef = (root, leaves) => {
  if (root == null) return [];

  if (root.left == null && root.right == null) leaves.push(root.val);

  LeavesRef(root.left, leaves);
  LeavesRef(root.right, leaves);
};

const LeavesList = (root) => {
  let leaves = [];

  LeavesRef(root, leaves);

  return leaves;
};

console.log(LeavesList(a));
