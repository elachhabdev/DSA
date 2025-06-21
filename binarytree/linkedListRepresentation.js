class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

function preOrder(root) {
  if (root == null) return;
  console.log(root.val);

  preOrder(root.left);
  preOrder(root.right);
}
function postOrder(root) {
  if (root == null) return;

  preOrder(root.left);
  preOrder(root.right);

  console.log(root.val);
}
function inOrder(root) {
  if (root == null) return;

  preOrder(root.left);
  console.log(root.val);
  preOrder(root.right);
}

function insertLevel(arr, i) {
  let root = null;
  if (i < arr.length) {
    root = new Node(arr[i]);

    root.left = insertLevel(arr, 2 * i + 1);

    root.right = insertLevel(arr, 2 * i + 2);
  }

  return root;
}

function createBinaryTree() {
  let arr = ["A", "B", "C", "D", "E", "F"];

  let root = insertLevel(arr, 0);

  preOrder(root);
}

createBinaryTree();
