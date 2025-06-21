function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

function insertLevel(arr, i) {
  let root = null;
  if (i < arr.length && arr[i] != null) {
    root = new TreeNode(arr[i]);

    root.left = insertLevel(arr, 2 * i + 1);

    root.right = insertLevel(arr, 2 * i + 2);
  }

  return root;
}

let arr = [3, 9, 20, null, null, 15, 7];

let root = insertLevel(arr, 0);

var maxDepth = function (root) {
  if (root == null) return 0;

  if (root.left == null && root.right == null) return 1;

  let depthLeft = maxDepth(root.left);
  let depthRight = maxDepth(root.right);

  return Math.max(depthLeft, depthRight) + 1;
};

console.log(maxDepth(root));
