class Node {
  constructor(val) {
    this.key = val;
    this.left = null;
    this.right = null;
  }
}
class BST {
  constructor() {
    this.root = null;
  }

  insert(root, key) {
    if (root === null) return new Node(key);

    if (root.key === key) return root;

    if (key < root.key) root.left = insert(root.left, key);
    else if (key > root.key) root.right = insert(root.right, key);

    return root;
  }
  search(root, key) {
    if (root === null || root.key === key) return root;

    if (root.key < key) return search(root.right, key);

    return search(root.left, key);
  }
}
