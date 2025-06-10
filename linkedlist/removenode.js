class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

const linkedListRemove = (head, target) => {
  let p = null;
  let q = head;

  if (head == null) return null;

  if (head.val == target) {
    head = head.next;
    return head;
  }

  while (q != null) {
    if (q.val == target) {
      p.next = q.next;
      q = q.next;
    } else {
      p = q;
      q = q.next;
    }
  }

  return head;
};

const a = new Node(1);
const b = new Node(2);
const c = new Node(3);
const d = new Node(4);
const e = new Node(5);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

let head = linkedListRemove(a, 4);

let current = head;

while (current != null) {
  console.log(current.val);
  current = current.next;
}
