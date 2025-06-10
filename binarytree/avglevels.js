class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new TreeNode(3);
const b = new TreeNode(4);
const c = new TreeNode(5);
const d = new TreeNode(10);
const e = new TreeNode(20);
const f = new TreeNode(15);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const averageOfLevels = (root) => {
  let queue = [];

  let avgs = [];

  let level = [];

  let currentQueue = [];

  if (root == null) return [];

  queue.push(root);
  currentQueue.push(root);

  while (queue.length > 0) {
    let current = queue.shift();

    level.push(currentQueue.shift().val);

    if (current.left != null) {
      queue.push(current.left);
    }

    if (current.right != null) {
      queue.push(current.right);
    }

    if (currentQueue.length == 0) {
      currentQueue = [...queue];
      avgs.push(level.reduce((prev, curr) => prev + curr) / level.length);
      level = [];
    }
  }

  return avgs;
};

console.log(averageOfLevels(a));
