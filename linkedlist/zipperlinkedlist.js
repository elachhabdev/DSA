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
// a -> b -> c

const x = new Node("x");
const y = new Node("y");
const z = new Node("z");
x.next = y;
y.next = z;
// x -> y -> z

const s = new Node("s");
const t = new Node("t");
s.next = t;
// s -> t

const one = new Node(1);
const two = new Node(2);
const three = new Node(3);
const four = new Node(4);
one.next = two;
two.next = three;
three.next = four;

const zipperLists = (head1, head2) => {
  let p = head1;
  let q = head2;

  while (p != null && q != null) {
    let temp1 = p.next;
    let temp2 = q.next;

    p.next = q;

    if (temp1 == null) {
      q.next = temp2;
    } else {
      q.next = temp1;
    }

    p = temp1;
    q = temp2;
  }

  let current = head1;

  while (current != null) {
    console.log(current.val);
    current = current.next;
  }

  return head1;
};

console.log(zipperLists(a, x));
console.log(zipperLists(s, one));
