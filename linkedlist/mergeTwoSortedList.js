function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}
var mergeTwoLists = function (list1, list2) {
  let p = list1;
  let q = list2;

  let mergel = null;
  let taill = null;

  while (p != null || q != null) {
    let pval = p == null ? Number.POSITIVE_INFINITY : p.val;
    let qval = q == null ? Number.POSITIVE_INFINITY : q.val;

    if (pval <= qval) {
      if (mergel == null) {
        mergel = new ListNode(pval, null);
        taill = mergel;
      } else {
        let temp = new ListNode(pval, null);
        taill.next = temp;
        taill = temp;
      }
      p = p.next;
    } else {
      if (mergel == null) {
        mergel = new ListNode(qval, null);
        taill = mergel;
      } else {
        let temp = new ListNode(qval, null);
        taill.next = temp;
        taill = temp;
      }

      q = q.next;
    }
  }

  return mergel;
};

const l1a = new ListNode(1);
const l1b = new ListNode(2);
const l1c = new ListNode(4);

l1a.next = l1b;
l1b.next = l1c;

const l2a = new ListNode(1);
const l2b = new ListNode(3);

l2a.next = l2b;

mergeTwoLists(null, null);
