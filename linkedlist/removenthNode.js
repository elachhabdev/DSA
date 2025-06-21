function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var removeNthFromEnd = function (head, n) {
  let left = null;
  let slow = head;
  let fast = head;
  let right = null;

  for (let i = 0; i < n; i++) {
    if (fast == null) continue;
    fast = fast.next;
  }

  while (fast != null) {
    left = slow;
    if (slow != null) {
      slow = slow.next;
    }
    if (slow != null) {
      right = slow.next;
    }

    fast = fast.next;
  }

  if (left == null) {
    head = head.next;
  } else {
    left.next = right;
  }

  return head;
};
const l2a = new ListNode(3);
const l2b = new ListNode(2);
const l2c = new ListNode(0);
const l2d = new ListNode(-4);

l2a.next = l2b;
l2b.next = l2c;
l2c.next = l2d;

removeNthFromEnd(l2a, 4);
