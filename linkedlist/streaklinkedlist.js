class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const linkedListStreak = (head) => {
  if (head == null) return 0;

  let streakMax = Number.NEGATIVE_INFINITY;
  let p = head;
  let prevVal = head.val;
  let streak = 0;

  while (p != null) {
    if (prevVal == p.val) {
      streak++;
      streakMax = Math.max(streakMax, streak);
    } else {
      streak = 1;
    }
    prevVal = p.val;
    p = p.next;
  }

  return streakMax;
};

const a = new Node(1);
const b = new Node(2);
const c = new Node(2);
const d = new Node(3);
const e = new Node(3);

a.next = b;
b.next = c;
c.next = d;
d.next = e;

console.log(linkedListStreak(a));
