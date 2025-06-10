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
const e = new Node("e");
const f = new Node("f");

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

const reverseList = (head) => {
  let p = null;
  let q = head;

  while (q != null) {
    let temp = q.next;

    q.next = p;
    p = q;
    q = temp;
  }

  let current = p;

  while (current != null) {
    console.log(current.val);
    current = current.next;
  }

  return p;
};

console.log(reverseList(a));
