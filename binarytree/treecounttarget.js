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
const e = new Node(4);
const f = new Node(1);

a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.right = f;

const treecounttarget = (root, target) => {
  if (root == null) return 0;

  if (root.val == target) {
    return (
      1 +
      treecounttarget(root.left, target) +
      treecounttarget(root.right, target)
    );
  } else {
    return (
      treecounttarget(root.left, target) + treecounttarget(root.right, target)
    );
  }
};

console.log(treecounttarget(a, 4, 0));
