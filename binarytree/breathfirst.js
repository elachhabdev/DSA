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
const f = new Node("f");

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;
const breadthFirstValues = (root) => {
  let queue = [];
  let values = [];

  if (root == null) return [];

  queue.push(root);

  while (queue.length > 0) {
    let current = queue.shift();

    console.log(current.val);
    values.push(current.val);

    if (current.left != null) {
      queue.push(current.left);
    }

    if (current.right != null) {
      queue.push(current.right);
    }
  }

  return values;
};

console.log(breadthFirstValues(a));
