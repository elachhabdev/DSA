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

const linkedListValues = (head) => {
  let result = [];

  let current = head;

  while (current != null) {
    result.push(current.val);
    current = current.next;
  }

  return result;
};

console.log(linkedListValues(a));
