class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
const a = new Node(1);
const b = new Node(2);
const c = new Node(4);
a.next = b;
b.next = c;
// a -> b -> c

const x = new Node(1);
const y = new Node(3);
const z = new Node(4);
x.next = y;
y.next = z;

var mergeTwoLists = function (list1, list2) {
  if (list1 == null) return list2;

  if (list2 == null) return list1;

  if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

console.log(mergeTwoLists(a, x));
