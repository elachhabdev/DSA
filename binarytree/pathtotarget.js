function TreeNode(data) {
  this.data = data;
  this.left = null;
  this.right = null;
}
const pathtotarget = (root, target, [...values]) => {
  if (root == null) return [];

  values.push(root.data);

  if (root.data == target) return values;

  return [
    ...pathtotarget(root.left, target, values),
    ...pathtotarget(root.right, target, values),
  ];
};

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

console.log(pathtotarget(a, 11, []));
