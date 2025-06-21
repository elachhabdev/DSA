function _Node(val, next, random) {
  this.val = val;
  this.next = next;
  this.random = random;
}

var copyRandomList = function (head) {
  var listRandom = [];

  var headL = null;

  var tailL = null;

  let p = head;

  while (p != null) {
    let newL = new _Node(p.val, null, null);

    if (headL == null) {
      headL = newL;
      tailL = headL;
    } else {
      tailL.next = newL;
      tailL = newL;
    }

    listRandom.push([newL, p]);

    p = p.next;
  }

  p = head;
  let index = 0;

  while (p != null) {
    let randomL = listRandom.find((f) => f[1] == p.random);
    if (randomL) {
      listRandom[index][0].random = randomL[0];
    }
    index++;
    p = p.next;
  }

  return headL;
};

var copyRandomListB = function (head) {
  var listRandom = new Map();

  var headL = null;

  var tailL = null;

  let p = head;

  while (p != null) {
    let newL = new _Node(p.val, null, null);

    if (headL == null) {
      headL = newL;
      tailL = headL;
    } else {
      tailL.next = newL;
      tailL = newL;
    }

    listRandom.set(p, newL);

    p = p.next;
  }

  p = head;

  while (p != null) {
    listRandom.get(p).random = listRandom.get(p.random);

    p = p.next;
  }
};

var visited = new Map();

var copyRandomListBB = function (head, visited) {
  if (head == null) return null;
  if (visited.has(head)) return visited.get(head);

  let node = new _Node(head.val);

  visited.set(head, node);

  node.next = copyRandomListBB(head.next, visited);
  node.random = copyRandomListBB(head.random, visited);

  return node;
};

const l1a = new _Node(7);
const l1b = new _Node(13);
const l1c = new _Node(11);
const l1d = new _Node(10);
const l1e = new _Node(1);

l1a.next = l1b;
l1b.next = l1c;
l1c.next = l1d;
l1d.next = l1e;
l1b.random = l1a;
l1d.random = l1c;
l1c.random = l1e;
l1e.random = l1a;

console.log(copyRandomListB(l1a));
