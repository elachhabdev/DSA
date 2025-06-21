function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var hasCycle = function (head) {
  let p = head;
  let visited = new Set();

  while (p != null) {
    if (visited.has(p)) return true;
    visited.add(p);

    p = p.next;
  }

  return false;
};

const l2a = new ListNode(3);
const l2b = new ListNode(2);
const l2c = new ListNode(0);
const l2d = new ListNode(-4);

l2a.next = l2b;
l2b.next = l2c;
l2c.next = l2d;
l2d.next = l2b;
console.log(hasCycle(l2a));
