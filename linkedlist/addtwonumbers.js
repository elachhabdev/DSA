function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var addTwoNumbers = function (l1, l2) {
  let add = 0;

  let p1 = l1;

  let p2 = l2;

  let suml = null;
  let sumt = null;

  while (p1 != null || p2 != null || add != 0) {
    let sum = (p1 == null ? 0 : p1.val) + (p2 == null ? 0 : p2.val) + add;
    add = 0;
    if (sum >= 10) {
      sum -= 10;
      add = 1;
    }

    if (suml == null) {
      suml = new ListNode(sum, null);
      sumt = suml;
    } else {
      let temp = new ListNode(sum, null);
      sumt.next = temp;
      sumt = temp;
    }

    if (p1 != null) {
      p1 = p1.next;
    }

    if (p2 != null) {
      p2 = p2.next;
    }
  }
};

const l1a = new ListNode(9);
const l1b = new ListNode(9);
const l1c = new ListNode(9);
const l1d = new ListNode(9);
const l1e = new ListNode(9);
const l1f = new ListNode(9);
const l1g = new ListNode(9);

l1a.next = l1b;
l1b.next = l1c;
l1c.next = l1d;
l1d.next = l1e;
l1e.next = l1f;
l1f.next = l1g;

const l2a = new ListNode(9);
const l2b = new ListNode(9);
const l2c = new ListNode(9);
const l2d = new ListNode(9);

l2a.next = l2b;
l2b.next = l2c;
l2c.next = l2d;

console.log(addTwoNumbers(l1a, l2a));
