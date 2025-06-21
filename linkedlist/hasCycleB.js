function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

var hasCycle = function (head) {
  if (head == null) return false;

  let slow = head;
  let fast = head.next;

  while (slow != null || fast != null) {
    if (fast == null || fast.next == null) return false;

    if (slow == fast) return true;

    slow = slow.next;
    fast = fast.next.next;
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
