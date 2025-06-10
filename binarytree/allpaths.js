function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
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

/**
 * @param {TreeNode} root
 * @return {string[]}
 */

const depthFirstValuesBackArr = (root, [...values]) => {
  if (root == null) return [];

  values.push(root.val);

  if (root.left == null && root.right == null) return [values];

  return [
    ...depthFirstValuesBack(root.left, values),
    ...depthFirstValuesBack(root.right, values),
  ];
};
var binaryTreePaths = function (root) {
  return depthFirstValuesBackString(root, "");
};

const depthFirstValuesBackString = (root, str) => {
  if (root == null) return [];

  if (str != "") {
    str += "->";
  }

  str += root.val;

  if (root.left == null && root.right == null) return [str];

  return [
    ...depthFirstValuesBackString(root.left, str),
    ...depthFirstValuesBackString(root.right, str),
  ];
};
console.log(binaryTreePaths(a));
