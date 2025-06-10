class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

const a = new Node(3);
const b = new Node(11);
const c = new Node(4);
const d = new Node(4);
const e = new Node(-2);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;

const rightmost = (root) => {
  let queue = [];
  let values = [];
  let current = null;

  if (root == null) return null;

  queue.push(root);

  while (queue.length > 0) {
    current = queue.shift();

    values.push(current.val);

    if (current.left != null) {
      queue.push(current.left);
    }

    if (current.right != null) {
      queue.push(current.right);
    }
  }

  return current;
};

console.log(rightmost(a));
