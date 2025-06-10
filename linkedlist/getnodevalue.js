class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const a = new Node("a");
const b = new Node("b");
const c = new Node("c");
const d = new Node("d");

a.next = b;
b.next = c;
c.next = d;

// a -> b -> c -> d
const getNodeValue = (head, index) => {
  let current = head;

  let i = 0;

  while (current != null) {
    if (i == index) {
      return current.val;
    }

    i++;
    current = current.next;
  }

  return null;
};
console.log(getNodeValue(a, 3));
