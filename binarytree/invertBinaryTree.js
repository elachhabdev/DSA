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

let arr = [4, 2, 7, 1, 3, 6, 9];

let root = insertLevel(arr, 0);

var invertTreeRec = function (root) {
  let t = new TreeNode(root.val);

  t.left = root.right == null ? null : invertTreeRec(root.right);
  t.right = root.left == null ? null : invertTreeRec(root.left);

  return t;
};

console.log(invertTreeRec(root));
