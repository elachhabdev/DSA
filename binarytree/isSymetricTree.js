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

let arr = [1, 2, 2, 3, 4, 4, 3];

let root = insertLevel(arr, 0);

var isSymmetricRec = function (subTreeLeft, subTreeRight) {
  if (subTreeLeft != null && subTreeRight == null) return false;
  if (subTreeLeft == null && subTreeRight != null) return false;
  if (subTreeLeft == null && subTreeRight == null) return true;

  if (subTreeLeft.val != subTreeRight.val) return false;

  return (
    isSymmetricRec(subTreeLeft.left, subTreeRight.right) &&
    isSymmetricRec(subTreeLeft.right, subTreeRight.left)
  );
};
var isSymmetric = function (root) {
  return isSymmetricRec(root.left, root.right);
};
console.log(isSymmetricRec(root.left, root.right));
