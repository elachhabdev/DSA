function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var reverseList = function (head) {
  let p = null;
  let q = head;

  while (q != null) {
    let temp = q.next;
    q.next = p;
    p = q;
    q = temp;
  }

  return p;
};

const l2a = new ListNode(9);
const l2b = new ListNode(8);
const l2c = new ListNode(7);
const l2d = new ListNode(6);

l2a.next = l2b;
l2b.next = l2c;
l2c.next = l2d;

reverseList(l2a);
