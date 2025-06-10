class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(6);
const e = new Node(7);
const f = new Node(5);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

//values is value type
const depthFirstValuesBack = (root, [...values]) => {
  if (root == null) return [];

  values.push(root.val);

  depthFirstValuesBack(root.left, values);
  depthFirstValuesBack(root.right, values);

  return values;
};

//values is reference
const depthFirstValues = (root, values) => {
  if (root == null) return [];

  values.push(root.val);

  depthFirstValues(root.left, values);
  depthFirstValues(root.right, values);

  return values;
};

//values is value with concat
const depthFirstValuesConcat = (root) => {
  if (root == null) return [];

  const left = depthFirstValuesConcat(root.left);
  const right = depthFirstValuesConcat(root.right);

  return [root.val, ...left, ...right];
};

const depthFirstValuesIterative = (root) => {
  let stack = [];
  let values = [];

  if (root == null) return [];

  stack.push(root);

  while (stack.length > 0) {
    let current = stack.pop();

    console.log(current.val);
    values.push(current.val);

    if (current.right != null) {
      stack.push(current.right);
    }

    if (current.left != null) {
      stack.push(current.left);
    }
  }

  return values;
};

console.log(depthFirstValuesIterative(a));
console.log(depthFirstValuesConcat(a));
console.log(depthFirstValuesBack(a, []));
