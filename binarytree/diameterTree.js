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

let arr = [1, 2, 3, 4, 5];

let root = insertLevel(arr, 0);

var diameterOfBinaryTreeRec = function (root, diameter) {
  if (root == null) return 0;

  if (root.left == null && root.right == null) return 1;

  let hl = diameterOfBinaryTreeRec(root.left, diameter);

  let hr = diameterOfBinaryTreeRec(root.right, diameter);

  diameter["diameter"] = Math.max(diameter["diameter"], hl + hr);

  return Math.max(hl, hr) + 1;
};

var diameterOfBinaryTree = function (root) {
  let diameter = { diameter: 0 };

  diameterOfBinaryTreeRec(root, diameter);

  return diameter["diameter"];
};

console.log(diameterOfBinaryTree(root));
