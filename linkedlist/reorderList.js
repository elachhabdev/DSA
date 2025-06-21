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

var middleList = function (head) {
  let len = 0;

  let middle = head;

  let p = head;

  let index = 0;

  while (p != null) {
    len++;
    p = p.next;
  }

  while (middle != null) {
    let foundIndex = Math.floor(len / 2);
    if (index == foundIndex) {
      break;
    }
    index++;
    middle = middle.next;
  }

  let nulledMiddle = head;
  index = 0;

  while (nulledMiddle != null) {
    let foundIndex = Math.floor(len / 2);
    if (index == foundIndex - 1) {
      nulledMiddle.next = null;
      break;
    }
    index++;
    nulledMiddle = nulledMiddle.next;
  }

  return middle;
};

var reorderList = function (head) {
  if (head.next == null) return head;

  let p = head;

  let middle = middleList(head);
  let q = reverseList(middle);

  while (p != null) {
    let tempP = p == null ? null : p.next;
    let tempQ = q == null ? null : q.next;

    if (p != null) {
      p.next = q;
      p = tempP;
    }

    if (p != null) {
      q.next = tempP;
      q = tempQ;
    }
  }

  return head;
};

const l2a = new ListNode(1);
const l2b = new ListNode(2);
const l2c = new ListNode(3);
const l2d = new ListNode(4);
const l2e = new ListNode(5);

l2a.next = l2b;
l2b.next = l2c;
l2c.next = l2d;
/* l2d.next = l2e;
 */
reorderList(l2a);
